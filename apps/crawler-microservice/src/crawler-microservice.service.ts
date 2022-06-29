import { Injectable } from '@nestjs/common';

@Injectable()
export class CrawlerMicroserviceService {
  getHello(): string {
    return 'Hello World! from crawler-microservice';
  }
}
