import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, "../../client", "static"));
  app.setBaseViewsDir(join(__dirname, "../../client", "views"));
  app.setViewEngine("ejs");

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
