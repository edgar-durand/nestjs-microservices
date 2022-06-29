import { Module } from '@nestjs/common';
import { GoogleMicroserviceController } from './google-microservice.controller';
import { GoogleMicroserviceService } from './google-microservice.service';

@Module({
  imports: [],
  controllers: [GoogleMicroserviceController],
  providers: [GoogleMicroserviceService],
})
export class GoogleMicroserviceModule {}
