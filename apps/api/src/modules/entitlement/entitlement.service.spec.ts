import { EntitlementService } from './entitlement.service';
import type { UserEntitlementRow } from './entitlement.types';

describe('EntitlementService.computeState', () => {
  const service = new EntitlementService({} as any);

  const baseRow: UserEntitlementRow = {
    isPro: false,
    proExpiresAt: null,
    proActivatedAt: null,
    trialEndsAt: null,
    lastEntitlementPeriodType: null,
    proWillRenew: null,
    proBillingIssueDetectedAt: null,
  };

  it('resolves anonymous users (null row) to free', () => {
    const snapshot = service.computeState(null);
    expect(snapshot.state).toBe('free');
    expect(snapshot.hasFullAccess).toBe(false);
  });

  it('resolves a user with no purchase history to free', () => {
    const snapshot = service.computeState(baseRow);
    expect(snapshot.state).toBe('free');
    expect(snapshot.hasFullAccess).toBe(false);
    expect(snapshot.trialDaysRemaining).toBeNull();
  });

  it('resolves an active trial to trial_active with correct days remaining', () => {
    const now = Date.now();
    const trialEndsAt = new Date(now + 3 * 86_400_000 + 1000); // ~3 days out
    const snapshot = service.computeState({
      ...baseRow,
      isPro: true,
      lastEntitlementPeriodType: 'TRIAL',
      trialEndsAt,
      proExpiresAt: trialEndsAt,
    });
    expect(snapshot.state).toBe('trial_active');
    expect(snapshot.hasFullAccess).toBe(true);
    expect(snapshot.isTrialActive).toBe(true);
    expect(snapshot.trialDaysRemaining).toBe(4);
  });

  it('resolves an expired trial (trialEndsAt in the past) to expired, not trial_active', () => {
    const trialEndsAt = new Date(Date.now() - 1000);
    const snapshot = service.computeState({
      ...baseRow,
      isPro: false,
      lastEntitlementPeriodType: 'TRIAL',
      trialEndsAt,
    });
    expect(snapshot.state).toBe('expired');
    expect(snapshot.hasFullAccess).toBe(false);
  });

  it('resolves an active paid subscription to pro_active', () => {
    const proExpiresAt = new Date(Date.now() + 30 * 86_400_000);
    const snapshot = service.computeState({
      ...baseRow,
      isPro: true,
      lastEntitlementPeriodType: 'NORMAL',
      proExpiresAt,
    });
    expect(snapshot.state).toBe('pro_active');
    expect(snapshot.hasFullAccess).toBe(true);
    expect(snapshot.isProActive).toBe(true);
  });

  it('keeps a cancelled-but-still-active subscription as pro_active with willRenew=false', () => {
    const proExpiresAt = new Date(Date.now() + 5 * 86_400_000);
    const snapshot = service.computeState({
      ...baseRow,
      isPro: true,
      lastEntitlementPeriodType: 'NORMAL',
      proExpiresAt,
      proWillRenew: false,
      proUnsubscribeDetectedAt: new Date(),
    } as UserEntitlementRow);
    expect(snapshot.state).toBe('pro_active');
    expect(snapshot.hasFullAccess).toBe(true);
    expect(snapshot.willRenew).toBe(false);
  });

  it('resolves a lapsed subscription (isPro=false, proExpiresAt in the past) to expired', () => {
    const proExpiresAt = new Date(Date.now() - 86_400_000);
    const snapshot = service.computeState({
      ...baseRow,
      isPro: false,
      lastEntitlementPeriodType: 'NORMAL',
      proExpiresAt,
    });
    expect(snapshot.state).toBe('expired');
    expect(snapshot.hasFullAccess).toBe(false);
  });

  it('resolves an active subscription in a billing grace period to billing_issue with access retained', () => {
    const proExpiresAt = new Date(Date.now() + 3 * 86_400_000);
    const snapshot = service.computeState({
      ...baseRow,
      isPro: true,
      lastEntitlementPeriodType: 'NORMAL',
      proExpiresAt,
      proBillingIssueDetectedAt: new Date(),
    });
    expect(snapshot.state).toBe('billing_issue');
    expect(snapshot.hasFullAccess).toBe(true);
    expect(snapshot.isInGracePeriod).toBe(true);
  });
});
