import { TYPES } from "@constants/types";
import { UserRepository } from "@repositories/implementations";
import { EventEmitter } from "events";
import { decorate, inject, injectable } from "inversify";

decorate(injectable(), EventEmitter);

@injectable()
export class MailUser extends EventEmitter {
	constructor(
		@inject(TYPES.UserRepository) private readonly repository: UserRepository,
	) {
		super();
		this.on("evento", res => {
			console.log(res);
			this.greet();
		});
	}

	greet() {
		console.log("hello world.");
	}
}
