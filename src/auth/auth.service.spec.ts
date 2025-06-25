import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: Partial<UsersService>;
  let jwtService: Partial<JwtService>;

  beforeEach(() => {
    usersService = {};
    jwtService = {
      sign: jest.fn().mockReturnValue('test-token'),
    };
    authService = new AuthService(
      usersService as UsersService,
      jwtService as JwtService,
    );
  });

  describe('login', () => {
    it('должен возвращать accessToken', async () => {
      const user = { serviceNumber: '123', password: 'pass' };
      const result = await authService.login(user);
      expect(result).toEqual({ accessToken: 'test-token' });
      expect(jwtService.sign).toHaveBeenCalledWith({
        serviceNumber: '123',
        password: 'pass',
      });
    });
  });
});
