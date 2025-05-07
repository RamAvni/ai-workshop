"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertMessages1745844579884 = void 0;
class InsertMessages1745844579884 {
    constructor() {
        this.name = "InsertMessages1745844579884";
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO \`message\` (\`text\`, \`isSent\`) VALUES (?,?), (?,?), (?,?), (?,?), (?,?)`, [
            "Hello, how can I help you?",
            false,
            "I am looking for a new laptop.",
            true,
            "What are the specifications you are looking for?",
            true,
            "I need something lightweight and portable.",
            false,
            "Do you have a budget in mind?",
            true,
        ]);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM \`message\` WHERE \`text\` IN (?,?,?,?,?)`, [
            "Hello, how can I help you?",
            "I am looking for a new laptop.",
            "What are the specifications you are looking for?",
            "I need something lightweight and portable.",
            "Do you have a budget in mind?",
        ]);
    }
}
exports.InsertMessages1745844579884 = InsertMessages1745844579884;
//# sourceMappingURL=1745844579884-insert-messages.migration.js.map