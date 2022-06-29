import { NestFactory } from '@nestjs/core';
import { CrawlerMicroserviceModule } from './crawler-microservice.module';
import { Logger } from "@nestjs/common";
import { MICROSERVICES_CONFIG } from "@app/utils";

async function bootstrap() {
  const logger = new Logger('CRAWLER_MICROSERVICE')
  const app = await NestFactory.createMicroservice(
    CrawlerMicroserviceModule,
    MICROSERVICES_CONFIG.CRAWLER_MICROSERVICE,
  );
  app.listen()
    .then(() => {
      logger.verbose(`CrawlerMicroservice is running on port ${MICROSERVICES_CONFIG.CRAWLER_MICROSERVICE.options.port}`)
    })
    .catch((error) => {
      logger.error(error)
    })
}
bootstrap();
