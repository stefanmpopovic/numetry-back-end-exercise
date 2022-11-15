import {MigrationInterface, QueryRunner} from "typeorm";

export class BaseTables1668458289923 implements MigrationInterface {
    name = 'BaseTables1668458289923'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "assignment" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, "start_period" TIMESTAMP NOT NULL, "end_period" TIMESTAMP NOT NULL, "active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_43c2f5a3859f54cedafb270f37e" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "game" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, "number_of_modes" integer, "active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_352a30652cd352f552fef73dec5" PRIMARY KEY ("id"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "game"`);
    await queryRunner.query(`DROP TABLE "assignment"`);
  }
}
