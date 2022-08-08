import { IUsersRepository } from "../repositories/IUsersRepository";

class ListUsersService {
  constructor(private usersRepository: IUsersRepository) { }

  async execute() {

    return this.usersRepository.list();
  }
}

export { ListUsersService };