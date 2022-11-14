import {MigrationInterface, QueryRunner} from "typeorm";

export class GameSeed1668466977407 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("INSERT INTO game " +
      "(name, number_of_modes) " +
      "VALUES ('Game1', 2), " +
      "('Game2', 3), " +
      "('Game3', 3), " +
      "('Game4', 3), " +
      "('Game5', 3), " +
      "('Game6', 3), " +
      "('Game7', 3) ");
  }
  
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("DELETE FROM game");
  }
}
