import {MigrationInterface, QueryRunner} from "typeorm";

export class AssignmentGameSeed1673015213458 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("INSERT INTO assignment_games_game " +
        "(\"assignmentId\", \"gameId\") " +
        "VALUES (1, 1), " +
        "(1, 2), " +
        "(2, 1), " +
        "(2, 3), " +
        "(4, 4) ");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM assignment_games_game");
    }
}
