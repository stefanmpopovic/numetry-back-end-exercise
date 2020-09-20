import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import { User } from '../../entity/User';

const get = (_req: Request, res: Response) => {
  res.status(200).send('get :: Success request');
};

const getById = (req: Request, res: Response) => {
  const { id } = req.params;
  // console.log("Loading users from the database...");
  // const users = await connection.getRepository(User).find(user);
  res.status(200).send(`${id} :: getById :: Success request`);
};

const post = async (_req: Request, res: Response) => {
  const user = new User();
  user.firstName = "Carlos";
  user.lastName = "Rodrigues";
  user.age = 33;

  const connection = getConnection();
  const userSaved = await connection.getRepository(User).save(user);

  res.status(201).send({data: userSaved});
};

const put = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(201).send(`${id} :: put :: Success request`);
};

const remove = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(201).send(`${id} :: remove :: Success request`);
};

export default {
  get, getById, post, put, remove,
};
