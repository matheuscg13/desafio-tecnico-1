import { MigrationInterface, QueryRunner } from "typeorm";

export class addPassword1679661089170 implements MigrationInterface {
    name = 'addPassword1679661089170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }

}
