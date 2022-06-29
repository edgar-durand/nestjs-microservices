import { NestFactory } from "@nestjs/core";
import { MongodbMicroserviceModule } from "./mongodb-microservice.module";
import { Logger } from "@nestjs/common";
import { MICROSERVICES_CONFIG } from "@app/utils";

async function bootstrap() {
  const logger = new Logger('MONGODB_MICROSERVICE')
  const app = await NestFactory.createMicroservice(
    MongodbMicroserviceModule,
    MICROSERVICES_CONFIG.MONGODB_MICROSERVICE,
  );
  app.listen()
    .then(() => {
      logger.verbose(`MongodbMicroservice is running on port ${MICROSERVICES_CONFIG.MONGODB_MICROSERVICE.options.port}`)
    })
    .catch((error) => {
      logger.error(error)
    })
}

bootstrap();
