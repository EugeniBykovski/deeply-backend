import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import type { EntitlementState } from '../../entitlement/entitlement.types';

export class SubscriptionStatusDto {
  @ApiProperty()
  isPro!: boolean;

  @ApiPropertyOptional()
  proExpiresAt?: string | null;

  @ApiPropertyOptional()
  proActivatedAt?: string | null;

  @ApiProperty({
    enum: [
      'trial_active',
      'pro_active',
      'free',
      'expired',
      'billing_issue',
      'unknown',
    ],
  })
  state!: EntitlementState;

  @ApiProperty()
  hasFullAccess!: boolean;

  @ApiProperty()
  isTrialActive!: boolean;

  @ApiProperty()
  isProActive!: boolean;

  @ApiPropertyOptional()
  trialEndsAt?: string | null;

  @ApiPropertyOptional()
  trialDaysRemaining?: number | null;

  @ApiPropertyOptional()
  willRenew?: boolean | null;

  @ApiPropertyOptional()
  periodType?: string | null;

  @ApiProperty()
  isInGracePeriod!: boolean;
}
