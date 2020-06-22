import { Request, Response, NextFunction } from 'express';

const get = (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).send('get :: Success request');
}

const getById = (req: Request, res: Response, _next: NextFunction) => {
  const { id } = req.params;
  res.status(200).send(`${id} :: getById :: Success request`);
}

const post = (_req: Request, res: Response, _next: NextFunction) => {
  res.status(201).send('post :: Success request');
}

const put = (req: Request, res: Response, _next: NextFunction) => {
  const { id } = req.params;
  res.status(201).send(`${id} :: put :: Success request`);
}

const remove = (req: Request, res: Response, _next: NextFunction) => {
  const { id } = req.params;
  res.status(201).send(`${id} :: remove :: Success request`);
}

export default { get, getById, post, put, remove };