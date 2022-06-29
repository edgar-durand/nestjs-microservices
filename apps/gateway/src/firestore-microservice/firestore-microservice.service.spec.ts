import { Test, TestingModule } from '@nestjs/testing';
import { FirebaseMicroserviceService } from './firebase-microservice.service';

describe('FirestoreMicroserviceService', () => {
  let service: FirebaseMicroserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirebaseMicroserviceService],
    }).compile();

    service = module.get<FirebaseMicroserviceService>(FirebaseMicroserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
