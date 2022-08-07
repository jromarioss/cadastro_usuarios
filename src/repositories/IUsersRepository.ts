import { User } from "../models/User";

interface ICreateUserDTO {
  id?: string;
  name: string;
  phone: string;
  cpf: string;
  address: string;
  number: number;
  state: string;
}
interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>
  findByCpf(cpf: string): Promise<User | undefined>
  list(): Promise<User[] | undefined>
}

export { IUsersRepository, ICreateUserDTO };