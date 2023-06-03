import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigrations implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      CREATE TABLE "users" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "age" integer NOT NULL,
        "email" character varying NOT NULL,
        "info" character varying NOT NULL,
        "name" character varying NOT NULL,
        "username" character varying NOT NULL,
        "address" jsonb NOT NULL,
        CONSTRAINT "PK_8c6fa35c320d4b2c3e6e9bbcf44" PRIMARY KEY ("id")
      )
    `);

        await queryRunner.query(`
      CREATE TABLE "posts" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "dateCreation" TIMESTAMP NOT NULL,
        "text" character varying NOT NULL,
        "title" character varying NOT NULL,
        "userId" uuid,
        CONSTRAINT "PK_d055b7d8903a9991f947c968b82" PRIMARY KEY ("id")
      )
    `);

        await queryRunner.query(`
      ALTER TABLE "posts"
      ADD CONSTRAINT "FK_5181477e87934d15563b666a4bb"
      FOREIGN KEY ("userId")
      REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
      ALTER TABLE "posts"
      DROP CONSTRAINT "FK_5181477e87934d15563b666a4bb"
    `);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
