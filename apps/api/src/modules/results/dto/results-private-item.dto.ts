import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ResultsPrivateItemDto {
  @ApiProperty() id!: string;
  @ApiProperty({ example: 'My Private Train' }) name!: string;

  @ApiProperty({ example: 12 }) runsCount!: number;

  @ApiPropertyOptional({ example: '2026-02-27T10:10:10.000Z' })
  lastRunAt?: string | null;

  @ApiPropertyOptional({ example: 240 })
  bestTotalSeconds?: number | null;
}
