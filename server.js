const port = 3000;

const app = require('./src/app');

app.listen(port, () => {
  console.log(`Ru on localhost:${port}`);
});