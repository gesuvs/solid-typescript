import { inject, injectable } from "inversify";
import { TYPES } from "@constants/types";
import { UserRepository } from "@repositories/implementations";
import { ICreateUserRequestDTO } from "@use-cases/create-user/dto/create-user-dto";
import { User } from "@entities/user.entity";
import { REGEX_VALIDATION_MAIL } from "src/utils/regex";
import { EventEmitter } from "events";
import { MailUser } from "@use-cases/send-mail";

@injectable()
export class CreateUser {
	@inject(TYPES.UserRepository) private readonly repository: UserRepository;

	@inject(TYPES.MailUser) private readonly mail: MailUser;

	async execute(data: ICreateUserRequestDTO): Promise<void> {
		const user = new User({
			name: data.name,
			mail: data.mail,
			password: data.password,
		});

		await this.repository.deleteAll();

		const userExists = await this.repository.findByMail(data.mail);

		if (!REGEX_VALIDATION_MAIL.test(data.mail)) throw new Error("Invalid mail");

		if (userExists) throw new Error("User already exists");

		await this.repository.save(user);

		this.mail.emit("evento", user);

		// this.provider.sendMail({
		//   to: {
		//     name: data.name,
		//     mail: data.mail,
		//   },
		//   from: {
		//     name: data.name,
		//     mail: data.mail,
		//   },
		//   subject: "Seja bem vindo",
		//   body: "Teste",
		// });
	}
}
