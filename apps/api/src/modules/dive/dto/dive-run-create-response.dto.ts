import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class DiveRunCreateResponseDto {
  @ApiProperty() id!: string;
  @ApiProperty({ example: '2026-02-27T12:00:00.000Z' }) startedAt!: string;

  @ApiProperty({ example: 72 }) holdSeconds!: number;
  @ApiProperty({ example: 24 }) maxDepthMeters!: number;

  @ApiProperty({ example: true }) completed!: boolean;

  @ApiPropertyOptional({ example: { interpolated: true } })
  debug?: any;
}
