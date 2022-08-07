import { Request, Response } from "express";
import { UsersRepository } from "../repositories/implementations/UsersRepository";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      phone,
      cpf,
      address,
      number,
      state
    } = request.body;

    const usersRepository = UsersRepository.getInstance();
    const createUserService = new CreateUserService(usersRepository);

    await createUserService.execute({
      name,
      phone,
      cpf,
      address,
      number,
      state
    });

    return response.status(201).send();
  }
}

export { CreateUserController };