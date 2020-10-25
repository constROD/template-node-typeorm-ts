import { MigrationInterface, QueryRunner } from "typeorm";
import { UserEntitySchema } from "../entities/Users";

export class UsersRefactoring1603643835229 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${UserEntitySchema} RENAME COLUMN "first_name" TO "firstName"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE ${UserEntitySchema} RENAME COLUMN "firstName" TO "first_name"`
    );
  }
}
