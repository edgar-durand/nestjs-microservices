import { Injectable } from '@nestjs/common';

@Injectable()
export class FirebaseMicroserviceService {
  getHello(): string {
    return 'Hello World! from firebase-microservice';
  }
}
