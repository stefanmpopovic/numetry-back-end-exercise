import req from 'supertest';
import app from '../../app';
// import { getConnection } from 'typeorm';

describe('Parent POST', () => {

  beforeAll(async () => {

  });
    
  afterAll(async () => {
      // return await getConnection().close();
  });

  it('[GET] /assingment', async () => {
    const res = await req(app).get('/assingment');
    expect(res.status).toEqual(200);
    expect(res.text).toBe('get :: Success request');
  });

  // test('[POST] /user', async () => {
  //   const res = await req(app).post('/user');
  //   expect(res.status).toEqual(201);
  //   // expect(res.text).toBe('post :: Success request');
  // });

});