import req from 'supertest';
import app from './app';

test('[GET] /user', async () => {
  const res = await req(app).get('/user');
  expect(res.status).toEqual(200);
  expect(res.text).toBe('get :: Success request');
});
