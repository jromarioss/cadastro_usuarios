import { Request, Response } from "express";
import { UsersRepository } from "../repositories/implementations/UsersRepository";
import { ListUsersService } from "../services/ListUsersService";

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {

    const usersRepository = UsersRepository.getInstance();
    const createUserService = new ListUsersService(usersRepository);

    const users = await createUserService.execute();

    return response.json(users);
  }
}

export { ListUsersController };