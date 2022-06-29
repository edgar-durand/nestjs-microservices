import { Controller } from '@nestjs/common';
import { GoogleMicroserviceService } from './google-microservice.service';
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class GoogleMicroserviceController {
  constructor(private readonly googleMicroserviceService: GoogleMicroserviceService) {}

  @MessagePattern({ cmd: 'check' })
  getHello(): string {
    return this.googleMicroserviceService.getHello();
  }
}
