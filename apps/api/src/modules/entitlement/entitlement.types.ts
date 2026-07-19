export type EntitlementState =
  | 'trial_active'
  | 'pro_active'
  | 'free'
  | 'expired'
  | 'billing_issue'
  | 'unknown';

export interface EntitlementSnapshot {
  state: EntitlementState;
  hasFullAccess: boolean;
  isTrialActive: boolean;
  isProActive: boolean;
  willRenew: boolean | null;
  periodType: string | null;
  trialEndsAt: string | null;
  trialDaysRemaining: number | null;
  proExpiresAt: string | null;
  proActivatedAt: string | null;
  isInGracePeriod: boolean;
}

export interface UserEntitlementRow {
  isPro: boolean;
  proExpiresAt: Date | null;
  proActivatedAt: Date | null;
  trialEndsAt: Date | null;
  lastEntitlementPeriodType: string | null;
  proWillRenew: boolean | null;
  proBillingIssueDetectedAt: Date | null;
}

/**
 * Centralized lock rule — replaces the per-module computeIsLocked()
 * duplicated in train.service.ts and dive.service.ts.
 */
export function isPracticeLocked(
  isPremium: boolean,
  hasFullAccess: boolean,
): boolean {
  return isPremium && !hasFullAccess;
}
