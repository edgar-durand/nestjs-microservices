import { Test, TestingModule } from '@nestjs/testing';
import { MongodbMicroserviceService } from './mongodb-microservice.service';

describe('FirestoreMicroserviceService', () => {
  let service: MongodbMicroserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongodbMicroserviceService],
    }).compile();

    service = module.get<MongodbMicroserviceService>(MongodbMicroserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
