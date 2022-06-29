import { Controller } from '@nestjs/common';
import { MongodbMicroserviceService } from './mongodb-microservice.service';
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class MongodbMicroserviceController {
  constructor(private readonly mongodbMicroserviceService: MongodbMicroserviceService) {}

  @MessagePattern({ cmd: 'check' })
  getHello(): string {
    return this.mongodbMicroserviceService.getHello();
  }
}
