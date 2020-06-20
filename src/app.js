const express = require('express');
const app = express();

const userRouter = require('./modules/user/userRoute.js');

app.use('/user', userRouter);

app.use('/', (req, res, next) => {
  res.send('Index routes');
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
});

module.exports = app;
