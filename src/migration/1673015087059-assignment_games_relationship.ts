import {MigrationInterface, QueryRunner} from "typeorm";

export class assignmentGamesRelationship1673015087059 implements MigrationInterface {
    name = 'assignmentGamesRelationship1673015087059'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "assignment_games_game" ("assignmentId" integer NOT NULL, "gameId" integer NOT NULL, CONSTRAINT "PK_60186607ee71f6022ca1888ee82" PRIMARY KEY ("assignmentId", "gameId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a6f25e9aba81591fa8de12c19f" ON "assignment_games_game" ("assignmentId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3c8096336130b769a6eda3b839" ON "assignment_games_game" ("gameId") `);
        await queryRunner.query(`ALTER TABLE "assignment_games_game" ADD CONSTRAINT "FK_a6f25e9aba81591fa8de12c19fa" FOREIGN KEY ("assignmentId") REFERENCES "assignment"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assignment_games_game" ADD CONSTRAINT "FK_3c8096336130b769a6eda3b8391" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assignment_games_game" DROP CONSTRAINT "FK_3c8096336130b769a6eda3b8391"`);
        await queryRunner.query(`ALTER TABLE "assignment_games_game" DROP CONSTRAINT "FK_a6f25e9aba81591fa8de12c19fa"`);
        await queryRunner.query(`DROP INDEX "IDX_3c8096336130b769a6eda3b839"`);
        await queryRunner.query(`DROP INDEX "IDX_a6f25e9aba81591fa8de12c19f"`);
        await queryRunner.query(`DROP TABLE "assignment_games_game"`);
    }

}
