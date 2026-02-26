import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateTrainingRunDto {
  @ApiProperty({ description: 'TrainingTemplate id', example: 'ck...' })
  @IsString()
  templateId!: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @ApiPropertyOptional({ example: 180 })
  @IsOptional()
  @IsInt()
  @Min(1)
  totalSeconds?: number;

  @ApiPropertyOptional({
    description: 'Any metrics JSON (co2Score, note, mood, etc.)',
    example: { co2Score: 7, note: 'felt calm' },
  })
  @IsOptional()
  metrics?: any;
}
