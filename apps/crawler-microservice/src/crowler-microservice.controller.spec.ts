import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerMicroserviceController } from './crawler-microservice.controller';
import { CrawlerMicroserviceService } from './crawler-microservice.service';

describe('CrowlerMicroserviceController', () => {
  let crowlerMicroserviceController: CrawlerMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CrawlerMicroserviceController],
      providers: [CrawlerMicroserviceService],
    }).compile();

    crowlerMicroserviceController = app.get<CrawlerMicroserviceController>(CrawlerMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(crowlerMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
