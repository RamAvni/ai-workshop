"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEnv = exports.privateSecret = void 0;
const secrets_handler_1 = require("@hilma/secrets-handler");
const param = {
    connectors: [
        {
            name: "mysqlSecret",
            alias: "DB",
        },
    ],
};
const setEnv = async () => {
    console.log("setting env");
    exports.privateSecret = (await (0, secrets_handler_1.default)(param));
    console.log(exports.privateSecret);
};
exports.setEnv = setEnv;
//# sourceMappingURL=setEnv.js.map