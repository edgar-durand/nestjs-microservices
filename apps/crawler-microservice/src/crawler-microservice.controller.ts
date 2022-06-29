import { Controller } from '@nestjs/common';
import { CrawlerMicroserviceService } from './crawler-microservice.service';
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class CrawlerMicroserviceController {
  constructor(private readonly crawlerMicroserviceService: CrawlerMicroserviceService) {}

  @MessagePattern({ cmd: 'check' })
  getHello(): string {
    return this.crawlerMicroserviceService.getHello();
  }
}
