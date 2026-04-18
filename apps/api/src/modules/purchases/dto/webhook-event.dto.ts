import { IsNumber, IsOptional, IsString } from 'class-validator';

/**
 * Subset of the RevenueCat webhook event we care about.
 * Full schema: https://www.revenuecat.com/docs/integrations/webhooks/event-flows
 */
export class RcWebhookEventDto {
  @IsString()
  type!: string;

  @IsString()
  app_user_id!: string;

  @IsOptional()
  @IsNumber()
  expiration_at_ms?: number | null;

  @IsOptional()
  @IsNumber()
  purchased_at_ms?: number | null;

  @IsOptional()
  entitlement_ids?: string[] | null;
}

export class RcWebhookPayloadDto {
  @IsString()
  api_version!: string;

  event!: RcWebhookEventDto;
}
