import { ApiProperty } from '@nestjs/swagger';

export class ResultsProgramProgressDto {
  @ApiProperty({ example: 'BEGINNER' }) key!: string;
  @ApiProperty({ example: 'beginner' }) slug!: string;

  @ApiProperty({ example: 'Beginner training' }) title!: string;
  @ApiProperty({ example: 'Foundation...' }) description!: string;

  @ApiProperty({ example: 6 }) completedMain!: number;
  @ApiProperty({ example: 12 }) mainTotal!: number;

  @ApiProperty({ example: 8 }) completedTotal!: number;
  @ApiProperty({ example: 20 }) total!: number;
}
