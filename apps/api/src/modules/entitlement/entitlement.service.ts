import { Inject, Injectable } from '@nestjs/common';
import type { PrismaClient } from '@repo/db';
import { PRISMA } from '../../database/prisma.provider';
import type {
  EntitlementSnapshot,
  UserEntitlementRow,
} from './entitlement.types';

const MS_PER_DAY = 86_400_000;

@Injectable()
export class EntitlementService {
  constructor(@Inject(PRISMA) private readonly prisma: PrismaClient) {}

  async getSnapshot(userId?: string | null): Promise<EntitlementSnapshot> {
    if (!userId) return this.computeState(null);

    const row = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        isPro: true,
        proExpiresAt: true,
        proActivatedAt: true,
        trialEndsAt: true,
        lastEntitlementPeriodType: true,
        proWillRenew: true,
        proBillingIssueDetectedAt: true,
      },
    });

    return this.computeState(row);
  }

  async hasFullAccess(userId?: string | null): Promise<boolean> {
    return (await this.getSnapshot(userId)).hasFullAccess;
  }

  /**
   * Phase A: identical to hasFullAccess. Kept as a separately named,
   * separately callable method because a later phase may gate specific
   * practice types (e.g. Pro-only even during trial) without touching
   * every call site that only needs generic access.
   */
  async canAccessPractice(userId?: string | null): Promise<boolean> {
    return this.hasFullAccess(userId);
  }

  /**
   * Pure, exported for reuse when a caller already has the row
   * (avoids a second query) and for unit testing.
   */
  computeState(row: UserEntitlementRow | null): EntitlementSnapshot {
    const now = new Date();
    const trialEndsAt = row?.trialEndsAt ?? null;
    const proExpiresAt = row?.proExpiresAt ?? null;
    const periodType = row?.lastEntitlementPeriodType ?? null;
    const billingIssue = row?.proBillingIssueDetectedAt ?? null;

    const trialActive =
      periodType === 'TRIAL' && !!trialEndsAt && trialEndsAt > now;
    const proActiveRaw =
      row?.isPro === true && (!proExpiresAt || proExpiresAt > now);

    let state: EntitlementSnapshot['state'];
    if (trialActive) state = 'trial_active';
    else if (proActiveRaw && billingIssue) state = 'billing_issue';
    else if (proActiveRaw) state = 'pro_active';
    else if (trialEndsAt || proExpiresAt) state = 'expired';
    else state = 'free';

    return {
      state,
      hasFullAccess:
        state === 'trial_active' ||
        state === 'pro_active' ||
        state === 'billing_issue',
      isTrialActive: state === 'trial_active',
      isProActive: state === 'pro_active' || state === 'billing_issue',
      willRenew: row?.proWillRenew ?? null,
      periodType,
      trialEndsAt: trialEndsAt?.toISOString() ?? null,
      trialDaysRemaining: trialActive
        ? Math.max(
            0,
            Math.ceil((trialEndsAt.getTime() - now.getTime()) / MS_PER_DAY),
          )
        : null,
      proExpiresAt: proExpiresAt?.toISOString() ?? null,
      proActivatedAt: row?.proActivatedAt?.toISOString() ?? null,
      isInGracePeriod: state === 'billing_issue',
    };
  }
}
