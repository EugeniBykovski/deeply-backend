import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CultureArticleDto {
  @ApiProperty() id!: string;
  @ApiProperty() slug!: string;
  @ApiProperty({ example: 'STORIES' }) section!: string;

  @ApiProperty() title!: string;
  @ApiPropertyOptional() subtitle?: string | null;
  @ApiPropertyOptional() description?: string | null;

  @ApiProperty() contentMarkdown!: string;

  @ApiPropertyOptional() coverImageUrl?: string | null;
  @ApiPropertyOptional() readTimeMinutes?: number | null;
  @ApiPropertyOptional() publishedAt?: string | null;

  @ApiProperty({ example: 'ru' }) lang!: string;
}
