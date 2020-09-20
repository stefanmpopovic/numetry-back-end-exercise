import express from 'express';
import type { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import "reflect-metadata";
import {createConnection} from "typeorm";
import userRouter from './modules/user/userRoute';

const app: Application = express();
app.use(cors());
app.use('/user', userRouter.router);

const dataBaseInitialize = async () => {
  await createConnection()
  .catch((error) => {
    console.log('database::conection:: error to connect', error);
  });
}

dataBaseInitialize();

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  return res.render('error', { error: err });
});

export default app;
