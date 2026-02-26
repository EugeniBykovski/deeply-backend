import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TrainingStepDto } from './training-step.dto';

export class TrainingDetailDto {
  @ApiProperty() id!: string;

  @ApiPropertyOptional({ example: 'beginner-train-1' })
  slug?: string | null;

  @ApiProperty({ enum: ['PRESET', 'PRIVATE'], example: 'PRESET' })
  kind!: 'PRESET' | 'PRIVATE';

  @ApiPropertyOptional({ example: 'BEGINNER' })
  programKey?: string | null;

  @ApiPropertyOptional({ example: 'beginner' })
  programSlug?: string | null;

  @ApiPropertyOptional({ example: 'Train 1' })
  title?: string | null;

  @ApiPropertyOptional({ example: 'Free' })
  subtitle?: string | null;

  @ApiPropertyOptional({ example: 'Intensity: 3/10' })
  description?: string | null;

  @ApiProperty({ example: false })
  isPremium!: boolean;

  @ApiProperty({ example: false })
  isLocked!: boolean;

  @ApiPropertyOptional() estimatedMinutes?: number | null;
  @ApiPropertyOptional() intensityLevel?: number | null;

  // Private settings
  @ApiPropertyOptional({ example: 'My CO2 set' })
  name?: string | null;

  @ApiPropertyOptional({ example: 4 })
  pointCount?: number | null;

  @ApiPropertyOptional({ example: 5 })
  repeats?: number | null;

  @ApiPropertyOptional({ example: true })
  saveResults?: boolean | null;

  @ApiPropertyOptional({ example: false })
  saveCO2?: boolean | null;

  @ApiPropertyOptional({ example: false })
  onlyClock?: boolean | null;

  @ApiProperty({ type: [TrainingStepDto] })
  steps!: TrainingStepDto[];

  @ApiProperty({ example: 'en' })
  lang!: string;
}
