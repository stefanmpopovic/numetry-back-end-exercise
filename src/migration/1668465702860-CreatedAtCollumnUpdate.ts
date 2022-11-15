import {MigrationInterface, QueryRunner} from "typeorm";

export class CreatedAtCollumnUpdate1668465702860 implements MigrationInterface {
  name = 'CreatedAtCollumnUpdate1668465702860'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "assignment" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`);
    await queryRunner.query(`ALTER TABLE "game" ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "game" ALTER COLUMN "created_at" DROP DEFAULT`);
    await queryRunner.query(`ALTER TABLE "assignment" ALTER COLUMN "created_at" DROP DEFAULT`);
  }
}
