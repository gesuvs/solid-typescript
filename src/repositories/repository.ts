import { injectable, unmanaged } from "inversify";
import {
	Connection,
	EntitySchema,
	getConnection,
	Repository as TypeOrmRepository,
} from "typeorm";

@injectable()
export class Repository<T> {
	constructor(@unmanaged() private readonly connection: Connection) {
		this.connection = getConnection();
	}

	getRepository(repository: EntitySchema<T>): TypeOrmRepository<T> {
		return this.connection.getRepository(repository);
	}
}
