import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { PrismaClient } from '@repo/db';
import { PRISMA } from '../../database/prisma.provider';

const RC_API = 'https://api.revenuecat.com/v1';
const PRO_ENTITLEMENT = 'Deeply Pro';

/** RevenueCat webhook event types that affect subscription status */
const ACTIVE_EVENTS = new Set(['INITIAL_PURCHASE', 'RENEWAL', 'UNCANCELLATION', 'SUBSCRIBER_ALIAS']);
const EXPIRED_EVENTS = new Set(['EXPIRATION', 'BILLING_ISSUE_WITHOUT_GRACE_PERIOD']);
const CANCELLED_EVENTS = new Set(['CANCELLATION']);

interface RcSubscriber {
  subscriber: {
    entitlements: Record<string, { expires_date: string | null; purchase_date: string | null } | undefined>;
  };
}

@Injectable()
export class PurchasesService {
  private readonly logger = new Logger(PurchasesService.name);

  constructor(
    @Inject(PRISMA) private readonly prisma: PrismaClient,
    private readonly config: ConfigService,
  ) {}

  // ─── Webhook handler ────────────────────────────────────────────────────────

  async handleWebhook(rawBody: string, signature: string | undefined): Promise<void> {
    this.verifyWebhookSignature(rawBody, signature);

    let payload: { api_version: string; event: Record<string, unknown> };
    try {
      payload = JSON.parse(rawBody);
    } catch {
      this.logger.warn('RevenueCat webhook: unparseable body');
      return;
    }

    const event = payload?.event;
    if (!event || typeof event.type !== 'string') return;

    const type = event.type as string;
    const appUserId = event.app_user_id as string | undefined;
    const expirationAtMs = event.expiration_at_ms as number | null | undefined;
    const purchasedAtMs = event.purchased_at_ms as number | null | undefined;
    const entitlementIds = (event.entitlement_ids as string[] | null | undefined) ?? [];

    if (!appUserId) return;

    // Only process events that involve "Deeply Pro" entitlement
    const affectsPro =
      entitlementIds.includes(PRO_ENTITLEMENT) ||
      EXPIRED_EVENTS.has(type) || // expiration events may not carry entitlement_ids
      CANCELLED_EVENTS.has(type);

    if (!affectsPro) return;

    this.logger.log(`RevenueCat webhook: ${type} for user ${appUserId}`);

    if (ACTIVE_EVENTS.has(type)) {
      await this.prisma.user.updateMany({
        where: { id: appUserId },
        data: {
          isPro: true,
          rcCustomerId: appUserId,
          proExpiresAt: expirationAtMs ? new Date(expirationAtMs) : null,
          proActivatedAt: purchasedAtMs ? new Date(purchasedAtMs) : new Date(),
        },
      });
    } else if (EXPIRED_EVENTS.has(type)) {
      await this.prisma.user.updateMany({
        where: { id: appUserId },
        data: { isPro: false },
      });
    } else if (CANCELLED_EVENTS.has(type)) {
      // Cancellation: keep isPro = true until expiration date
      await this.prisma.user.updateMany({
        where: { id: appUserId },
        data: {
          proExpiresAt: expirationAtMs ? new Date(expirationAtMs) : undefined,
        },
      });
    }
  }

  // ─── Sync from RevenueCat REST API ──────────────────────────────────────────

  async syncSubscription(userId: string): Promise<void> {
    const secretKey = this.config.get<string>('REVENUECAT_SECRET_KEY');
    if (!secretKey) {
      this.logger.warn('REVENUECAT_SECRET_KEY not configured, skipping sync');
      return;
    }

    let data: RcSubscriber;
    try {
      const res = await fetch(`${RC_API}/subscribers/${userId}`, {
        headers: {
          Authorization: `Bearer ${secretKey}`,
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        this.logger.warn(`RevenueCat sync failed for ${userId}: HTTP ${res.status}`);
        return;
      }
      data = (await res.json()) as RcSubscriber;
    } catch (err) {
      this.logger.error(`RevenueCat sync error for ${userId}:`, err);
      return;
    }

    const proEntitlement = data.subscriber?.entitlements?.[PRO_ENTITLEMENT];

    if (!proEntitlement) {
      await this.prisma.user.updateMany({
        where: { id: userId },
        data: { isPro: false },
      });
      return;
    }

    const expiresDate = proEntitlement.expires_date
      ? new Date(proEntitlement.expires_date)
      : null;
    const isActive = !expiresDate || expiresDate > new Date();

    await this.prisma.user.updateMany({
      where: { id: userId },
      data: {
        rcCustomerId: userId,
        isPro: isActive,
        proExpiresAt: expiresDate,
        proActivatedAt: proEntitlement.purchase_date
          ? new Date(proEntitlement.purchase_date)
          : undefined,
      },
    });
  }

  // ─── Get status ─────────────────────────────────────────────────────────────

  async getStatus(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { isPro: true, proExpiresAt: true, proActivatedAt: true },
    });
    return {
      isPro: user?.isPro ?? false,
      proExpiresAt: user?.proExpiresAt?.toISOString() ?? null,
      proActivatedAt: user?.proActivatedAt?.toISOString() ?? null,
    };
  }

  // ─── Signature verification ──────────────────────────────────────────────────

  private verifyWebhookSignature(_rawBody: string, authHeader: string | undefined): void {
    const secret = this.config.get<string>('REVENUECAT_SECRET_KEY');
    if (!secret) return; // not configured → skip verification in dev

    if (!authHeader) {
      throw new Error('Missing RevenueCat webhook authorization header');
    }

    // RevenueCat sends: Authorization: Bearer <secret_key>
    // Strip the "Bearer " prefix before comparing.
    const token = authHeader.startsWith('Bearer ')
      ? authHeader.slice(7)
      : authHeader;

    const crypto = require('crypto') as typeof import('crypto');
    const expected = Buffer.from(secret, 'utf8');
    const received = Buffer.from(token, 'utf8');

    if (
      expected.length !== received.length ||
      !crypto.timingSafeEqual(expected, received)
    ) {
      throw new Error('Invalid RevenueCat webhook authorization');
    }
  }
}
