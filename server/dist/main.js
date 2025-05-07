"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const setEnv_1 = require("./setEnv");
async function bootstrap() {
    await (0, setEnv_1.setEnv)();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix("api");
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({ allowedHeaders: "*", origin: "*" });
    await app.listen(process.env.PORT || 8080);
}
bootstrap();
//# sourceMappingURL=main.js.map