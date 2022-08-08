import { User } from "../../models/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {


  private users: User[] = [];

  private static INSTANCE: UsersRepository;

  static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }
  async create({
    address,
    cpf,
    name,
    number,
    phone,
    state,
    id
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      address,
      cpf,
      name,
      number,
      phone,
      state,
      id
    });
    this.users.push(user);
  }
  async findByCpf(cpf: string): Promise<User | undefined> {
    return this.users.find(user => user.cpf === cpf);
  }
  async list(): Promise<User[] | undefined> {
    return this.users;
  }
}


export { UsersRepository }