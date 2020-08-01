import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "@constants/types";
import { UserRepository } from "@repositories/implementations";
import { CreateUser } from "@use-cases/create-user";
import { Repository } from "@repositories/repository";
import { MailUser } from "@use-cases/send-mail";
import { BaseEntity } from "typeorm";

const container = new Container();

container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository);
container.bind<CreateUser>(TYPES.CreateUser).to(CreateUser);
container.bind<Repository<BaseEntity>>(TYPES.Repository).to(Repository);
container.bind<MailUser>(TYPES.MailUser).to(MailUser);

export { container };
