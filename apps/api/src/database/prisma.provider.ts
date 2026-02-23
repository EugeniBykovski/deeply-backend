import { prisma, PrismaClient } from '@repo/db';

export const PRISMA = 'PRISMA';

export const PrismaProvider = {
  provide: PRISMA,
  useValue: prisma as PrismaClient,
};
