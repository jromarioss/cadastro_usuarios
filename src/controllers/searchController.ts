import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { User } from '../models/User';

export const buscar = async (req: Request, res: Response) => {
  let nameFind: string = req.query.nomeSrc as string;
  let showUser: boolean = false;
  let finded = await User.findAll({
    where: {
      nome: {
        [Op.like]: `%${nameFind}%`
      }
    }
  });

  if (nameFind) {
    showUser = true;
  }

  res.render('pages/search', { finded, showUser });
}

export const mostrarTodoUser = async (req: Request, res: Response) => {
  let users = await User.findAll();
  res.render('pages/showAll', { users });
}