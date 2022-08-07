import { AppError } from "../errors/AppError";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IRequest {
  name: string;
  phone: string;
  cpf: string;
  address: string;
  number: number;
  state: string;
}
class CreateUserService {
  constructor(private usersRepository: IUsersRepository) { }

  async execute({
    name,
    phone,
    cpf,
    address,
    number,
    state
  }: IRequest) {
    const user = await this.usersRepository.findByCpf(cpf)
    if (user) {
      throw new AppError("User already exists");
    }

    this.usersRepository.create(
      {
        name,
        phone,
        cpf,
        address,
        number,
        state
      }
    );
  }
}

export { CreateUserService };