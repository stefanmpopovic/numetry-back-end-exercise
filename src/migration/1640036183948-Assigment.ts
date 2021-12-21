import {MigrationInterface, QueryRunner} from "typeorm";

export class Assigment1640036183948 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE assignment (
      id serial NOT NULL,
      name VARCHAR ( 150 ) NOT NULL,
      start_period DATE NOT NULL,
      end_period DATETIME,
      active BOOLEAN NOT NULL DEFAULT TRUE,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY ( id ) 
    )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(` DELETE FROM assignment `);
    await queryRunner.query(` DROP TABLE assignment `);
  }
}
