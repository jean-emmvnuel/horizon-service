import { Test, TestingModule } from '@nestjs/testing';
import { AbonnementService } from './abonnement.service';
import { DatabaseService } from '../database.service';

describe('AbonnementService', () => {
  let service: AbonnementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AbonnementService,
        {
          provide: DatabaseService,
          useValue: {
            query: jest.fn().mockReturnValue([]),
            get: jest.fn().mockReturnValue(null),
            run: jest.fn().mockReturnValue({ changes: 1 }),
          },
        },
      ],
    }).compile();

    service = module.get<AbonnementService>(AbonnementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
