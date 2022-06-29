import { Test, TestingModule } from '@nestjs/testing';
import { GoogleMicroserviceService } from './google-microservice.service';

describe('FirestoreMicroserviceService', () => {
  let service: GoogleMicroserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleMicroserviceService],
    }).compile();

    service = module.get<GoogleMicroserviceService>(GoogleMicroserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
