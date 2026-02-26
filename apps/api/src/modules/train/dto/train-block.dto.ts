import { ApiProperty } from '@nestjs/swagger';

export class TrainBlockDto {
  @ApiProperty({ example: 'BEGINNER' })
  key!: string;

  @ApiProperty({ example: 'beginner' })
  slug!: string;

  @ApiProperty({ example: 'Beginner training' })
  title!: string;

  @ApiProperty({ example: 'Foundation and calm rhythm' })
  description!: string;

  @ApiProperty({ example: 20 })
  totalTrainings!: number;

  @ApiProperty({ example: 10 })
  freeTrainings!: number;

  @ApiProperty({ example: 10 })
  premiumTrainings!: number;
}
