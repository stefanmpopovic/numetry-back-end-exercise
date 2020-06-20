
const get = (req, res, next) => {
  res.status(200).send('get :: Success request');
}

const getById = (req, res, next) => {
  const { id } = req.params;
  res.status(200).send(`${id} :: getById :: Success request`);
}

const post = (req, res, next) => {
  res.status(201).send('post :: Success request');
}

const put = (req, res, next) => {
  const { id } = req.params;
  res.status(201).send(`${id} :: put :: Success request`);
}

const remove = (req, res, next) => {
  const { id } = req.params;
  res.status(201).send(`${id} :: remove :: Success request`);
}

module.exports = { get, getById, post, put, remove };