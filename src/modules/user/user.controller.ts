import { Request, Response } from 'express';
import { User } from '../../entity/user';
import { getConnection } from 'typeorm';

const get = (_req: Request, res: Response) => {
  res.status(200).send('get :: Success request');
};

const getById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).send(`${id} :: getById :: Success request`);
};

const post = async (_req: Request, res: Response) => {

  console.log("Inserting a new user into the database...");
  const user = new User();
  user.firstName = "Carlos";
  user.lastName = "Rodrigues";
  user.age = 33;

  const connection = getConnection();
  await connection.getRepository(User).save(user);
  console.log("Saved a new user with id: " + user.id);

  console.log("Loading users from the database...");
  const users = await connection.getRepository(User).find(user);
  console.log("Loaded users: ", users);

  res.status(201).send('post :: Success request');
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
