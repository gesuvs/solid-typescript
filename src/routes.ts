import { Router } from "express";

const router = Router();

router.post("/users", (request, response) => response.status(201).send());

export { router };
