import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { DatabaseService } from '../database.service';
import { JwtService } from '@nestjs/jwt';
import { registerDto } from './dto/register.dto';
import { loginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly db: DatabaseService,
    private readonly jwtService: JwtService
  ) {}

  async register(data: registerDto) {
    const { username, email, password } = data;

    const existing = this.db.get('SELECT id FROM users WHERE email = ?', [email]);
    if (existing) {
      throw new ConflictException('Cet email est déjà utilisé');
    }

    const hash = await bcrypt.hash(password, 10);
    const id = crypto.randomUUID();

    this.db.run(
      `INSERT INTO users (id, email, username, name, password, role, role_label, active)
       VALUES (?, ?, ?, ?, ?, 'owner', 'Administrateur', 1)`,
      [id, email, username, username, hash]
    );

    const payload = { sub: id, email, role: 'owner' };
    const token = await this.jwtService.signAsync(payload);

    return {
      status: 201,
      message: 'Utilisateur créé avec succès',
      data: {
        user: { id, email, username, role: 'owner', roleLabel: 'Administrateur' },
        token,
      },
    };
  }

  async login(data: loginDto) {
    const { email, password } = data;
    const user = this.db.get<any>('SELECT * FROM users WHERE email = ?', [email]);

    if (!user || !user.active) {
      throw new UnauthorizedException('Identifiants incorrects ou compte inactif');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Identifiants incorrects');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      name: user.name || user.username,
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      status: 200,
      message: 'Connexion réussie',
      data: {
        user: {
          id: user.id,
          username: user.username,
          name: user.name || user.username,
          email: user.email,
          role: user.role,
          roleLabel: user.role_label,
          paymentLink: user.payment_link,
        },
        token,
      },
    };
  }

  async validateUser(userId: string) {
    const user = this.db.get<any>(
      'SELECT id, username, name, email, role, role_label as roleLabel, active, payment_link as paymentLink, created_at as createdAt FROM users WHERE id = ?',
      [userId]
    );
    if (!user) {
      throw new NotFoundException('Utilisateur non trouvé');
    }
    return user;
  }
}
