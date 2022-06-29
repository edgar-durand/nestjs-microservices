import { Test, TestingModule } from '@nestjs/testing';
import { FirebaseMicroserviceController } from './firebase-microservice.controller';
import { FirebaseMicroserviceService } from './firebase-microservice.service';

describe('FirebaseMicroserviceController', () => {
  let firebaseMicroserviceController: FirebaseMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FirebaseMicroserviceController],
      providers: [FirebaseMicroserviceService],
    }).compile();

    firebaseMicroserviceController = app.get<FirebaseMicroserviceController>(FirebaseMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(firebaseMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
