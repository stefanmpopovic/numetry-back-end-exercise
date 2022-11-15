import {MigrationInterface, QueryRunner} from "typeorm";

export class AssignmentSeed1668465862832 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("INSERT INTO assignment " +
      "(name, start_period, end_period) " +
      "VALUES ('Assignment1', '2022-10-30', '2022-11-30'), " +
      "('Assignment2', '2022-10-30', '2022-11-30'), " +
      "('Assignment3', '2022-10-30', '2022-11-30'), " +
      "('Assignment4', '2022-10-30', '2022-11-30'), " +
      "('Assignment5', '2022-10-30', '2022-11-30'), " +
      "('Assignment6', '2022-10-30', '2022-11-30'), " +
      "('Assignment7', '2022-10-30', '2022-11-30'), " +
      "('Assignment8', '2022-10-30', '2022-11-30') ");
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query("DELETE FROM assignment");
  }
}
