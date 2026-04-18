import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SubscriptionStatusDto {
  @ApiProperty()
  isPro!: boolean;

  @ApiPropertyOptional()
  proExpiresAt?: string | null;

  @ApiPropertyOptional()
  proActivatedAt?: string | null;
}
