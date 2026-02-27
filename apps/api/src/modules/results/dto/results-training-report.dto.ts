import { ApiProperty } from '@nestjs/swagger';
import { ResultsRunItemDto } from './results-run-item.dto';

export class ResultsTrainingReportDto {
  @ApiProperty({ example: 'beginner-train-1' })
  slug!: string;

  @ApiProperty({ example: 'Train 1' })
  title!: string;

  @ApiProperty({ example: 10 }) runsCount!: number;
  @ApiProperty({ example: 240 }) bestTotalSeconds!: number | null;
  @ApiProperty({ example: 210 }) avgTotalSeconds!: number | null;

  @ApiProperty({ type: [ResultsRunItemDto] })
  runs!: ResultsRunItemDto[];
}
