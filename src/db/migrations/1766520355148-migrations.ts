import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1766520355148 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
            CREATE TABLE IF NOT EXISTS blog (
                id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                title VARCHAR(128) NOT NULL,
                author VARCHAR(64) NOT NULL,
                body jsonb DEFAULT '{}'::jsonb NOT NULL
            );
            `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
