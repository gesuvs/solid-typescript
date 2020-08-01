import { inject, injectable } from "inversify";
import { User } from "@entities/user.entity";
import { TYPES } from "@constants/types";
import { Repository } from "@repositories/repository";

@injectable()
export class UserRepository {
	@inject(TYPES.Repository) private readonly repository: Repository<User>;

	async findAll(): Promise<User[]> {
		return this.repository.getRepository(User.init()).find();
	}

	async findById(id: string): Promise<User> {
		return this.repository.getRepository(User.init()).findOne(id);
	}

	async findByMail(mail: string): Promise<User> {
		return this.repository.getRepository(User.init()).findOne({
			where: {
				mail,
			},
		});
	}

	async save(user: User): Promise<void> {
		await this.repository.getRepository(User.init()).save(user);
	}

	async deleteAll(): Promise<void> {
		await this.repository
			.getRepository(User.init())
			.createQueryBuilder()
			.delete()
			.from(User)
			.execute();
	}
}
