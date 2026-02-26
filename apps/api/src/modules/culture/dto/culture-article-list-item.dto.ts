import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CultureArticleListItemDto {
  @ApiProperty() id!: string;
  @ApiProperty() slug!: string;

  @ApiProperty({ example: 'STORIES' })
  section!: string;

  @ApiProperty() title!: string;

  @ApiPropertyOptional() description?: string | null;
  @ApiPropertyOptional() coverImageUrl?: string | null;
  @ApiPropertyOptional() readTimeMinutes?: number | null;

  @ApiPropertyOptional() publishedAt?: string | null;
  @ApiProperty({ example: 'ru' }) lang!: string;
}
