
import express, { Application, NextFunction, Request, Response } from "express";
import userRouter from "./modules/user/userRoute";

const app: Application = express();
app.use('/user', userRouter.router);

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
});

export default app;
