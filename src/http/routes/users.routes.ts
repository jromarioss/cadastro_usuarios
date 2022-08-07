import { Router } from "express";
import { CreateUserController } from "../../controllers/CreateUserController";
import { ListUsersController } from "../../controllers/ListUsersController";

const usersRouter = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

usersRouter.post("", createUserController.handle);
usersRouter.get("", listUsersController.handle);
export { usersRouter };