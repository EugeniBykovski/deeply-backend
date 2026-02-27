import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class DiveTemplateItemDto {
  @ApiProperty() id!: string;
  @ApiProperty({ example: 'dive-1' }) slug!: string;

  @ApiProperty({ example: 'EASY' }) difficulty!: string;

  @ApiProperty({ example: 24 }) maxDepthMeters!: number;
  @ApiPropertyOptional({ example: 65 }) targetHoldSeconds?: number | null;

  @ApiProperty({ example: false }) isPremium!: boolean;
  @ApiProperty({ example: false }) isLocked!: boolean;

  @ApiProperty({ example: 'Dive #1' }) title!: string;
  @ApiPropertyOptional({ example: 'Easy' }) subtitle?: string | null;
  @ApiPropertyOptional({ example: 'Target: ~65s...' }) description?:
    | string
    | null;

  @ApiProperty({ example: 'en' }) lang!: string;
}
