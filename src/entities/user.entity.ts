import { Column, Entity, EntitySchema, PrimaryColumn } from "typeorm";
import { uuid } from "uuidv4";

@Entity()
export class User {
	@PrimaryColumn()
	public id: string;

	@Column()
	public name: string;

	@Column()
	public mail: string;

	@Column()
	public password: string;

	constructor(props: Omit<User, "id">, id?: string) {
		Object.assign(this, props);
		if (!id) this.id = uuid();
	}

	static init(): EntitySchema<User> {
		return new EntitySchema<User>({
			name: "User",
			columns: {},
		});
	}
}
