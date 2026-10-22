import { Test, TestingModule } from '@nestjs/testing';
import { AbonnementController } from './abonnement.controller';
import { AbonnementService } from './abonnement.service';

describe('AbonnementController', () => {
  let controller: AbonnementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbonnementController],
      providers: [
        {
          provide: AbonnementService,
          useValue: {
            createAbonnement: jest.fn().mockResolvedValue({ success: true }),
            getAbonnement: jest.fn().mockResolvedValue([]),
            getAbonnementById: jest.fn().mockResolvedValue(null),
            updateAbonnement: jest.fn().mockResolvedValue({ success: true }),
            deleteAbonnement: jest.fn().mockResolvedValue({ success: true }),
          },
        },
      ],
    }).compile();

    controller = module.get<AbonnementController>(AbonnementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
