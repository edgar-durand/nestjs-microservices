import { Injectable } from '@nestjs/common';

@Injectable()
export class MongodbMicroserviceService {
  getHello(): string {
    return 'Hello World! from mongodb-microservice';
  }
}
