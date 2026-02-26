import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { BREATH_PHASE_ENUM } from '../train.constants';

class CreateTrainingStepInput {
  @ApiProperty({ enum: BREATH_PHASE_ENUM, example: 'INHALE' })
  @IsIn(BREATH_PHASE_ENUM as unknown as string[])
  phase!: string;

  @ApiProperty({ example: 25, minimum: 1 })
  @IsInt()
  @Min(1)
  @Max(3600)
  durationSeconds!: number;
}

export class CreatePrivateTrainingDto {
  @ApiProperty({ example: 'My Private Train' })
  @IsString()
  name!: string;

  @ApiPropertyOptional({ example: 4 })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  pointCount?: number;

  @ApiPropertyOptional({ example: 5 })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(1000)
  repeats?: number;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  saveResults?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  saveCO2?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  onlyClock?: boolean;

  @ApiProperty({ type: [CreateTrainingStepInput] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateTrainingStepInput)
  steps!: CreateTrainingStepInput[];
}
