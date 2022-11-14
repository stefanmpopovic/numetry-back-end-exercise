import { Assignment } from "../entity/Assignment";
import { Game } from "../entity/Game";
import { ConnectionOptions, createConnection } from "typeorm";

const databaseConfig: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  host: process.env.TYPEORM_HOST || '',
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME || '',
  password: process.env.TYPEORM_PASSWORD || '',
  database: process.env.TYPEORM_DATABASE || '',
  logging: true,
  synchronize: false,
  entities: [
    Assignment,
    Game
  ],
  migrations: ['src/migration/**/*.ts'],
};

export const dataBaseInitialize = async () => {
  await createConnection(databaseConfig)
  .catch((error) => {
    console.log('database::conection:: error to connect', error);
  });
}