import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseBaseService } from './database-base.service';

describe('DatabaseBaseService', () => {
  let service: DatabaseBaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseBaseService],
    }).compile();

    service = module.get<DatabaseBaseService>(DatabaseBaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
