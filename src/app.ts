import express from 'express';
import type { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import "reflect-metadata";
import userRouter from './modules/assignment/assignment.route';
import './config/env.setup';
import { dataBaseInitialize } from './config/database_init';

const app: Application = express();
app.use(cors());
app.use('/assingment', userRouter.router);

dataBaseInitialize();

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  return res.render('error', { error: err });
});

export default app;
