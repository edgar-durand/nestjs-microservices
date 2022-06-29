import { Module } from '@nestjs/common';
import { MongodbMicroserviceController } from './mongodb-microservice.controller';
import { MongodbMicroserviceService } from './mongodb-microservice.service';

@Module({
  imports: [],
  controllers: [MongodbMicroserviceController],
  providers: [MongodbMicroserviceService],
})
export class MongodbMicroserviceModule {}
