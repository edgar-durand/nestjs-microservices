import { Module } from '@nestjs/common';
import { CrawlerMicroserviceController } from './crawler-microservice.controller';
import { CrawlerMicroserviceService } from './crawler-microservice.service';

@Module({
  imports: [],
  controllers: [CrawlerMicroserviceController],
  providers: [CrawlerMicroserviceService],
})
export class CrawlerMicroserviceModule {}
