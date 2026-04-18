import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PRISMA } from '../../database/prisma.provider';
import type { PrismaClient } from '@repo/db';

@Injectable()
export class UserService {
  constructor(@Inject(PRISMA) private readonly prisma: PrismaClient) {}

  async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        appleSub: true,
        isPro: true,
        proExpiresAt: true,
      },
    });

    if (!user) throw new NotFoundException('User not found');
    return {
      ...user,
      proExpiresAt: user.proExpiresAt?.toISOString() ?? null,
    };
  }
}
