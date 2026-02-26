import { ApiProperty } from '@nestjs/swagger';

export class TrainProgramDto {
  @ApiProperty({ example: 'BEGINNER' })
  key!: string;

  @ApiProperty({ example: 'beginner' })
  slug!: string;

  @ApiProperty({ example: 1 })
  sortOrder!: number;

  @ApiProperty({ example: 'Beginner training' })
  title!: string;

  @ApiProperty({ example: 'Foundation and calm rhythm' })
  description!: string;
}
