import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PRISMA } from '../../database/prisma.provider';
import type { PrismaClient } from '@repo/db';
import { AppleTokenService } from './apple-token.service';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(PRISMA) private readonly prisma: PrismaClient,
    private readonly apple: AppleTokenService,
    private readonly tokens: TokenService,
    private readonly config: ConfigService,
  ) {}

  async loginWithApple(appleToken: string) {
    const claims = await this.apple.verifyIdentityToken(appleToken);

    const user = await this.prisma.user.upsert({
      where: { appleSub: claims.sub },
      update: { ...(claims.email ? { email: claims.email } : {}) },
      create: {
        appleSub: claims.sub,
        ...(claims.email ? { email: claims.email } : {}),
      },
      select: { id: true, email: true, appleSub: true },
    });

    const accessToken = await this.tokens.signAccessToken(user.id);
    const refreshToken = await this.tokens.signRefreshToken(user.id);

    await this.prisma.refreshToken.create({
      data: {
        userId: user.id,
        tokenHash: this.tokens.hashRefreshToken(refreshToken),
        expiresAt: this.tokens.extractExpiryDate(refreshToken),
      },
    });

    await this.pruneOldRefreshTokens(user.id);

    return { user, accessToken, refreshToken };
  }

  async refresh(refreshToken: string) {
    const payload = await this.tokens.verifyRefreshToken(refreshToken);
    if (payload.type !== 'refresh' || !payload.sub) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const tokenHash = this.tokens.hashRefreshToken(refreshToken);
    const stored = await this.prisma.refreshToken.findUnique({
      where: { tokenHash },
    });

    if (!stored) {
      await this.prisma.refreshToken.updateMany({
        where: { userId: payload.sub, revokedAt: null },
        data: { revokedAt: new Date() },
      });
      throw new UnauthorizedException('Refresh token reuse detected');
    }

    if (stored.revokedAt || stored.expiresAt < new Date()) {
      throw new UnauthorizedException('Refresh token revoked/expired');
    }

    await this.prisma.refreshToken.update({
      where: { id: stored.id },
      data: { revokedAt: new Date() },
    });

    const newAccessToken = await this.tokens.signAccessToken(payload.sub);
    const newRefreshToken = await this.tokens.signRefreshToken(payload.sub);

    await this.prisma.refreshToken.create({
      data: {
        userId: payload.sub,
        tokenHash: this.tokens.hashRefreshToken(newRefreshToken),
        expiresAt: this.tokens.extractExpiryDate(newRefreshToken),
      },
    });

    await this.pruneOldRefreshTokens(payload.sub);

    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  }

  async deleteAccount(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true },
    });
    if (!user) throw new NotFoundException('User not found');

    await this.prisma.$transaction(async (tx) => {
      await tx.refreshToken.deleteMany({ where: { userId } });
      await tx.user.delete({ where: { id: userId } });
    });
  }

  private async pruneOldRefreshTokens(userId: string) {
    const max = Number(
      this.config.get<string>('AUTH_MAX_ACTIVE_REFRESH_TOKENS') ?? '5',
    );
    if (!Number.isFinite(max) || max < 1) return;

    const active = await this.prisma.refreshToken.findMany({
      where: { userId, revokedAt: null, expiresAt: { gt: new Date() } },
      orderBy: { createdAt: 'desc' },
      select: { id: true },
    });

    if (active.length <= max) return;

    const toRevoke = active.slice(max).map((t) => t.id);

    await this.prisma.refreshToken.updateMany({
      where: { id: { in: toRevoke } },
      data: { revokedAt: new Date() },
    });
  }
}
