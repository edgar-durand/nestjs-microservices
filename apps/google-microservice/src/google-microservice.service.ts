import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleMicroserviceService {
  getHello(): string {
    return 'Hello World! from google-microservice';
  }
}
