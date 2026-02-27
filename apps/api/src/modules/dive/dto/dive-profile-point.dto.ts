import { ApiProperty } from '@nestjs/swagger';

export class DiveProfilePointDto {
  @ApiProperty({ example: 1 }) sortOrder!: number;
  @ApiProperty({ example: 0 }) timeSeconds!: number;
  @ApiProperty({ example: 0 }) depthMeters!: number;
}
