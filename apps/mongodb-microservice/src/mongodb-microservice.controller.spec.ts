import { Test, TestingModule } from '@nestjs/testing';
import { MongodbMicroserviceController } from './mongodb-microservice.controller';
import { MongodbMicroserviceService } from './mongodb-microservice.service';

describe('MongodbMicroserviceController', () => {
  let mongodbMicroserviceController: MongodbMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MongodbMicroserviceController],
      providers: [MongodbMicroserviceService],
    }).compile();

    mongodbMicroserviceController = app.get<MongodbMicroserviceController>(MongodbMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mongodbMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
