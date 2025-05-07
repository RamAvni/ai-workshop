"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
exports.getOptions = getOptions;
const dotenv_1 = require("dotenv");
const fs_1 = require("fs");
const path_1 = require("path");
const typeorm_1 = require("typeorm");
function getOptions() {
    var _a, _b;
    return {
        type: "mysql",
        host: process.env.host,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        logging: ((_a = process.env.TYPEORM_LOGGING) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "on",
        synchronize: ((_b = process.env.TYPEORM_SYNC) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === "on",
        ssl: process.env.DB_SSL
            ? {
                cert: (0, fs_1.readFileSync)(process.env.DB_SSL),
            }
            : undefined,
        migrations: ["dist/migrations/*.migration{.ts,.js}"],
        migrationsRun: true,
        entities: ["dist/**/*.entity{.ts,.js}"],
    };
}
if (process.env.MIGRATION) {
    (0, dotenv_1.config)({ path: (0, path_1.join)(__dirname, "../.env.development") });
}
exports.dataSource = process.env.MIGRATION
    ? new typeorm_1.DataSource(getOptions())
    : {};
//# sourceMappingURL=data-source.js.map