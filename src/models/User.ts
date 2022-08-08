import { v4 as uuidv4 } from "uuid";
class User {
  declare id?: string;
  declare name: string;
  declare phone: string;
  declare cpf: string;
  declare address: string;
  declare number: number;
  declare state: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };