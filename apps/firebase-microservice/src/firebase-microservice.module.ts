import { Module } from '@nestjs/common';
import { FirebaseMicroserviceController } from './firebase-microservice.controller';
import { FirebaseMicroserviceService } from './firebase-microservice.service';
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [],
  controllers: [FirebaseMicroserviceController],
  providers: [FirebaseMicroserviceService],
  exports: [],
})
export class FirebaseMicroserviceModule {}
