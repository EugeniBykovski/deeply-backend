import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ResultsRunItemDto {
  @ApiProperty() id!: string;

  @ApiProperty({ example: '2026-02-27T10:10:10.000Z' })
  startedAt!: string;

  @ApiPropertyOptional({ example: '2026-02-27T10:14:10.000Z' })
  finishedAt?: string | null;

  @ApiPropertyOptional({ example: 240 })
  totalSeconds?: number | null;

  @ApiProperty({ example: true })
  completed!: boolean;

  @ApiPropertyOptional({ example: 'ck...' })
  templateId?: string | null;

  @ApiPropertyOptional({ example: { co2Score: 7, note: 'felt calm' } })
  metrics?: any;
}
