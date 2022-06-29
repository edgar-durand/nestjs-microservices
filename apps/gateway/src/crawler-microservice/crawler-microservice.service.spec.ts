import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerMicroserviceService } from './crawler-microservice.service';

describe('FirestoreMicroserviceService', () => {
  let service: CrawlerMicroserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrawlerMicroserviceService],
    }).compile();

    service = module.get<CrawlerMicroserviceService>(CrawlerMicroserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
