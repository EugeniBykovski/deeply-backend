import { ApiProperty } from '@nestjs/swagger';

export class CultureSectionDto {
  @ApiProperty({ example: 'STORIES' })
  key!: string;

  @ApiProperty({ example: 'Stories' })
  title!: string;

  @ApiProperty({ example: 'Stories, legends and turning points in freediving' })
  description!: string;
}
