import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, Min } from 'class-validator';

export class UpdateTrainingRunDto {
  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @ApiPropertyOptional({ example: 180, description: 'Total elapsed seconds' })
  @IsOptional()
  @IsInt()
  @Min(0)
  totalSeconds?: number;

  @ApiPropertyOptional({ example: { co2Score: 7 } })
  @IsOptional()
  metrics?: any;
}
