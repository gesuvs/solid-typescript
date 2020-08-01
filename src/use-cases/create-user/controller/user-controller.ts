import { Request, Response } from "express";
import { inject } from "inversify";
import {
	controller,
	httpPost,
	request,
	response,
	interfaces,
} from "inversify-express-utils";
import { TYPES } from "@constants/types";
import { CreateUser } from "@use-cases/create-user";
import { MailUser } from "@use-cases/send-mail";

@controller("/user")
export class CreateUserController implements interfaces.Controller {
	@inject(TYPES.CreateUser) private service: CreateUser;

	@httpPost("/")
	async handle(
		@request() req: Request,
		@response() res: Response,
	): Promise<Response> {
		const { name, mail, password } = req.body;

		try {
			await this.service.execute({
				name,
				mail,
				password,
			});

			return res.sendStatus(201);
		} catch (err) {
			return res.status(400).json({
				message: err.message || "Error",
			});
		}
	}
}
