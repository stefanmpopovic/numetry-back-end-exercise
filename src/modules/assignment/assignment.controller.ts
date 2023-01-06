import { Request, Response } from 'express';
import { Assignment } from '../../entity/Assignment';
import { getConnection, getRepository } from 'typeorm';

const get = async (_req: Request, res: Response) => {
  const allAssignment = await getRepository(Assignment).find({
    relations: ['games']
  });
  res.status(200).json(allAssignment);
};

const getById = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).send(`${id} :: getById :: Success request`);
};

const post = async (_req: Request, res: Response) => {
  const assignment = new Assignment();
  const connection = getConnection();
  const assignmentSaved = await connection.getRepository(Assignment).save(assignment);
  res.status(201).send({data: assignmentSaved});
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
