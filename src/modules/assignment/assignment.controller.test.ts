import req from 'supertest';
import app from '../../app';
import { getConnection } from 'typeorm';
import { dataBaseInitialize } from '../../config/database_init';
import { Assignment } from '../../entity/Assignment';

describe('Parent POST', () => {

  beforeAll(async () => {
    return await dataBaseInitialize();
  });
    
  afterAll(async () => {
      return await getConnection().close();
  });

  it('[GET] /assingment', async () => {
    await req(app).get('/assingment')
    .expect(200)
    .expect('Content-Type', /json/)
    .then(response => {
      const assignment: Assignment = response.body[0];
      expect(assignment.name).not.toBe(null);
      expect(assignment).toHaveProperty('games');
    });
  });

});