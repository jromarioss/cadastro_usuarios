import { Request, Response } from 'express';
import { User } from '../models/User';

export const cadastrar = async (req: Request, res: Response) => {
  res.render('pages/register');
}

export const cadastrarNv = async (req: Request, res: Response) => {
  let { nome, telefone, cpf, endereco, numero, estado } = req.body;

  if (nome) {
    const newUser = User.build({ nome });
    if (telefone) {
      newUser.telefone = telefone;
    }
    if (cpf) {
      newUser.cpf = cpf;
    }
    if (endereco) {
      newUser.endereco = endereco;
    }
    if (numero) {
      newUser.numero = parseInt(numero);
    }
    if (estado) {
      newUser.estado = estado;
    }
    await newUser.save();
  }

  res.redirect('/cadastrar');
}