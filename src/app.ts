/* eslint-disable import/extensions */
import "reflect-metadata";
import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { createConnection } from "typeorm";
import { container } from "./inversify.config";
import "@use-cases/create-user/controller/user-controller";

createConnection().then(() => {
	const app = express();
	const server = new InversifyExpressServer(container, null, null, app);

	server.setConfig(app => {
		app.use(
			express.urlencoded({
				extended: true,
			}),
		);
		app.use(express.json());
	});

	const appConfigured = server.build();

	appConfigured.listen(3333, () => {
		console.log("res");
	});
});
