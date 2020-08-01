import { injectable } from "inversify";
import { IMessage } from "../interfaces/mail";

// @injectable()
export interface IMailProvider {
	sendMail(message: IMessage): Promise<void>;
}
