import { Test, TestingModule } from '@nestjs/testing';
import { GoogleMicroserviceController } from './google-microservice.controller';
import { GoogleMicroserviceService } from './google-microservice.service';

describe('GoogleMicroserviceController', () => {
  let googleMicroserviceController: GoogleMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GoogleMicroserviceController],
      providers: [GoogleMicroserviceService],
    }).compile();

    googleMicroserviceController = app.get<GoogleMicroserviceController>(GoogleMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(googleMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
