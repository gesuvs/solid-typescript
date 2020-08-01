interface IAddress {
	name: string;
	mail: string;
}

export interface IMessage {
	to: IAddress;
	from: IAddress;
	subject: string;
	body: string;
}
