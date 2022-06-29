import { Controller } from '@nestjs/common';
import { FirebaseMicroserviceService } from './firebase-microservice.service';
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class FirebaseMicroserviceController {
  constructor(private readonly firebaseMicroserviceService: FirebaseMicroserviceService) {}

  @MessagePattern({ cmd: 'check' })
  getHello(): string {
    return this.firebaseMicroserviceService.getHello();
  }
}
