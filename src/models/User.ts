import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instance/mysql';

export interface UserInstance extends Model {
  id: number;
  nome: string;
  telefone: string;
  cpf: string;
  endereco: string;
  numero: number;
  estado: string;
}

export const User = sequelize.define<UserInstance>('Users', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nome: {
    type: DataTypes.STRING
  },
  telefone: {
    type: DataTypes.STRING
  },
  cpf: {
    type: DataTypes.STRING
  },
  endereco: {
    type: DataTypes.STRING
  },
  numero: {
    type: DataTypes.INTEGER
  },
  estado: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'usuarios',
  timestamps: false
});