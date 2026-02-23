import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createRemoteJWKSet, jwtVerify, JWTPayload } from 'jose';

type AppleClaims = JWTPayload & {
  sub: string;
  email?: string;
  nonce?: string;
};

@Injectable()
export class AppleTokenService {
  private readonly jwks = createRemoteJWKSet(
    new URL('https://appleid.apple.com/auth/keys'),
  );

  constructor(private readonly config: ConfigService) {}

  async verifyIdentityToken(
    identityToken: string,
    expectedNonce?: string,
  ): Promise<AppleClaims> {
    const audience = this.config.get<string>('APPLE_CLIENT_ID');
    if (!audience)
      throw new UnauthorizedException('APPLE_CLIENT_ID is not set');

    try {
      const { payload } = await jwtVerify(identityToken, this.jwks, {
        issuer: 'https://appleid.apple.com',
        audience,
      });

      if (!payload?.sub)
        throw new UnauthorizedException('Invalid Apple token (no sub)');

      if (expectedNonce && payload.nonce && payload.nonce !== expectedNonce) {
        throw new UnauthorizedException('Invalid nonce');
      }

      return payload as AppleClaims;
    } catch {
      throw new UnauthorizedException('Invalid Apple identity token');
    }
  }
}
