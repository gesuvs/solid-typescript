import "reflect-metadata";
import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { createConnection } from "typeorm";
import { container } from "./inversify.config";
import "@use-cases/create-user/controller/user-controller";
import { Console } from "./utils/logger";

createConnection().then(() => {
	const app = express();
	const server = new InversifyExpressServer(container, null, null, app);

	server.setConfig(() => {
		app.use(
			express.urlencoded({
				extended: true,
			}),
		);
		app.use(express.json());
	});

	const appConfigured = server.build();

	appConfigured.listen(Number(process.env.PORT), process.env.HOST, () => {
		Console(
			`Server up. 🚀 \nPORT: ${process.env.PORT}\nHOST: ${process.env.HOST}\n`,
		);
	});
});
