import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TrainingListItemDto {
  @ApiProperty() id!: string;

  @ApiProperty({ example: 'beginner-train-1' })
  slug!: string;

  @ApiProperty({ example: 'Train 1' })
  title!: string;

  @ApiPropertyOptional({ example: 'Free' })
  subtitle?: string | null;

  @ApiPropertyOptional({ example: 'Intensity: 3/10' })
  description?: string | null;

  @ApiProperty({ example: false })
  isPremium!: boolean;

  @ApiProperty({
    example: false,
    description: 'Computed lock state (for now equals isPremium)',
  })
  isLocked!: boolean;

  @ApiPropertyOptional({ example: 5 })
  estimatedMinutes?: number | null;

  @ApiPropertyOptional({ example: 3 })
  intensityLevel?: number | null;

  @ApiProperty({ example: 'en' })
  lang!: string;
}
