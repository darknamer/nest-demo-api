import { Test, TestingModule } from '@nestjs/testing';
import { TestCrontabService } from './test-crontab.service';

describe('TestCrontabService', () => {
  let service: TestCrontabService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestCrontabService],
    }).compile();

    service = module.get<TestCrontabService>(TestCrontabService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
