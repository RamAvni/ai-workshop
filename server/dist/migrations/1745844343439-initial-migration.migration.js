"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1745844343439 = void 0;
class InitialMigration1745844343439 {
    constructor() {
        this.name = "InitialMigration.migration1745844343439";
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`message\` (\`id\` int NOT NULL AUTO_INCREMENT, \`text\` varchar(255) NOT NULL, \`isSent\` tinyint NOT NULL, \`timestamp\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`message\``);
    }
}
exports.InitialMigration1745844343439 = InitialMigration1745844343439;
//# sourceMappingURL=1745844343439-initial-migration.migration.js.map