import {MigrationInterface, QueryRunner} from "typeorm";

export class init1596235482206 implements MigrationInterface {
    name = 'init1596235482206'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" character varying NOT NULL, "name" character varying NOT NULL, "mail" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
