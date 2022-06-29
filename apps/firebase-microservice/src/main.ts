import { NestFactory } from "@nestjs/core";
import { FirebaseMicroserviceModule } from "./firebase-microservice.module";
import { Logger } from "@nestjs/common";
import { MICROSERVICES_CONFIG } from "@app/utils";

async function bootstrap() {
  const logger = new Logger('FIREBASE_MICROSERVICE')
  const app = await NestFactory.createMicroservice(
    FirebaseMicroserviceModule,
    MICROSERVICES_CONFIG.FIREBASE_MICROSERVICE,
  );
  app.listen()
    .then(() => {
      logger.verbose(`FirebaseMicroservice is running on port ${MICROSERVICES_CONFIG.FIREBASE_MICROSERVICE.options.port}`)
    })
    .catch((error) => {
      logger.error(error)
    })
}

bootstrap();
