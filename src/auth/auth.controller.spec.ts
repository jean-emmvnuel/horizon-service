import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  const mockAuthService = {
    register: jest.fn().mockImplementation((dto) =>
      Promise.resolve({
        status: 201,
        message: 'Utilisateur créé avec succès',
        data: { user: { id: 'u-new', email: dto.email, username: dto.username }, token: 'mock-jwt-token' },
      })
    ),
    login: jest.fn().mockImplementation((dto) =>
      Promise.resolve({
        status: 200,
        message: 'Connexion réussie',
        data: { user: { id: 'u-1', email: dto.email }, token: 'mock-jwt-token' },
      })
    ),
    validateUser: jest.fn().mockImplementation((userId) =>
      Promise.resolve({
        id: userId,
        email: 'emmanuelahossi667@gmail.com',
        username: 'emmanuel',
        role: 'owner',
      })
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('POST /auth/register', () => {
    it('should register a new user', async () => {
      const dto = { username: 'testuser', email: 'test@example.com', password: 'password123' };
      const res = await controller.register(dto as any);
      expect(res.status).toBe(201);
      expect(res.data.token).toBe('mock-jwt-token');
      expect(mockAuthService.register).toHaveBeenCalledWith(dto);
    });
  });

  describe('POST /auth/login', () => {
    it('should authenticate user and return token', async () => {
      const dto = { email: 'emmanuelahossi667@gmail.com', password: 'backendGo@t667' };
      const res = await controller.login(dto as any);
      expect(res.status).toBe(200);
      expect(res.data.token).toBe('mock-jwt-token');
      expect(mockAuthService.login).toHaveBeenCalledWith(dto);
    });
  });

  describe('GET /auth/me', () => {
    it('should return profile of authenticated user', async () => {
      const req = { user: { sub: 'u-1' } };
      const res = await controller.me(req);
      expect(res.id).toBe('u-1');
      expect(res.email).toBe('emmanuelahossi667@gmail.com');
      expect(mockAuthService.validateUser).toHaveBeenCalledWith('u-1');
    });
  });
});
