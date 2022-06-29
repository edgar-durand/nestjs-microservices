import { NestFactory } from '@nestjs/core';
import { GoogleMicroserviceModule } from './google-microservice.module';
import { Logger } from "@nestjs/common";
import { MICROSERVICES_CONFIG } from "@app/utils";

async function bootstrap() {
  const logger = new Logger('GOOGLE_MICROSERVICE')
  const app = await NestFactory.createMicroservice(
    GoogleMicroserviceModule,
    MICROSERVICES_CONFIG.GOOGLE_MICROSERVICE,
  );
  app.listen()
    .then(() => {
      logger.verbose(`GoogleMicroservice is running on port ${MICROSERVICES_CONFIG.GOOGLE_MICROSERVICE.options.port}`)
    })
    .catch((error) => {
      logger.error(error)
    })
}
bootstrap();
