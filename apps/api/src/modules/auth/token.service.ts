import { Injectable } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  hashRefreshToken(token: string) {
    return crypto.createHash('sha256').update(token).digest('hex');
  }

  private getAccessTtl(): JwtSignOptions['expiresIn'] {
    return (this.config.get<string>('JWT_ACCESS_TTL') ??
      '30d') as JwtSignOptions['expiresIn'];
  }

  private getRefreshTtl(): JwtSignOptions['expiresIn'] {
    return (this.config.get<string>('JWT_REFRESH_TTL') ??
      '30d') as JwtSignOptions['expiresIn'];
  }

  async signAccessToken(userId: string) {
    const secret = this.config.get<string>('JWT_ACCESS_SECRET')!;
    const ttl = this.getAccessTtl();

    return this.jwt.signAsync(
      { sub: userId, type: 'access' },
      { secret, expiresIn: ttl },
    );
  }

  async signRefreshToken(userId: string) {
    const secret = this.config.get<string>('JWT_REFRESH_SECRET')!;
    const ttl = this.getRefreshTtl();

    const jti = crypto.randomUUID();

    return this.jwt.signAsync(
      { sub: userId, type: 'refresh', jti },
      { secret, expiresIn: ttl },
    );
  }

  async verifyRefreshToken(refreshToken: string) {
    const secret = this.config.get<string>('JWT_REFRESH_SECRET')!;
    return this.jwt.verifyAsync(refreshToken, { secret }) as Promise<{
      sub: string;
      type: 'refresh';
      jti?: string;
    }>;
  }

  extractExpiryDate(jwt: string): Date {
    const [, payloadB64] = jwt.split('.');
    const json = Buffer.from(payloadB64, 'base64url').toString('utf8');
    const payload = JSON.parse(json) as { exp?: number };
    return payload.exp
      ? new Date(payload.exp * 1000)
      : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  }
}
