import { ApiProperty } from '@nestjs/swagger';
import { ResultsRunItemDto } from './results-run-item.dto';

export class ResultsPrivateReportDto {
  @ApiProperty() id!: string;
  @ApiProperty({ example: 'My Private Train' }) name!: string;
  @ApiProperty({ example: '2026-02-27T10:10:10.000Z' }) createdAt!: string;

  @ApiProperty({ example: 12 }) runsCount!: number;
  @ApiProperty({ example: 240, nullable: true }) bestTotalSeconds!:
    | number
    | null;
  @ApiProperty({ example: 210, nullable: true }) avgTotalSeconds!:
    | number
    | null;

  @ApiProperty({ type: [ResultsRunItemDto] })
  runs!: ResultsRunItemDto[];
}
