import { Controller, Get, Param, Query, Headers } from '@nestjs/common';
import {
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
  ApiNotFoundResponse,
  ApiParam,
} from '@nestjs/swagger';
import { CultureService } from './culture.service';
import { CultureSectionDto } from './dto/culture-section.dto';
import { CultureArticleDto } from './dto/culture-article.dto';

@ApiTags('Culture')
@Controller('culture')
export class CultureController {
  constructor(private readonly culture: CultureService) {}

  @Get('sections')
  @ApiOperation({ summary: 'Get Culture sections' })
  @ApiOkResponse({ type: [CultureSectionDto] })
  sections() {
    return this.culture.getSections();
  }

  @ApiQuery({
    name: 'section',
    required: false,
    enum: [
      'STORIES',
      'ATHLETES',
      'COMPETITIONS',
      'TRAINING',
      'RELAX',
      'SAFETY',
    ],
  })
  @ApiQuery({ name: 'lang', required: false, example: 'en' })
  @ApiQuery({ name: 'pageOutput', required: false, example: '' })
  @ApiQuery({ name: 'limit', required: false, example: 20 })
  @ApiHeader({ name: 'accept-language', required: false, example: 'en' })
  @Get('articles')
  @Get('articles')
  @ApiOperation({ summary: 'List articles (localized)' })
  @ApiOkResponse({ description: 'Paginated list' })
  list(
    @Query('section') section?: string,
    @Query('lang') lang?: string,
    @Query('pageOutput') pageOutput?: string,
    @Query('limit') limit?: string,
    @Headers('accept-language') acceptLanguage?: string,
  ) {
    const resolvedLang = lang ?? acceptLanguage;
    return this.culture.listArticles({
      section,
      lang: resolvedLang,
      pageOutput,
      limit: limit ? Number(limit) : undefined,
    });
  }

  @Get('articles/:slug')
  @ApiOperation({ summary: 'Get Culture article by slug (localized)' })
  @ApiOkResponse({ type: CultureArticleDto })
  @ApiNotFoundResponse({ description: 'Article not found' })
  @ApiParam({
    name: 'slug',
    description: 'Article slug (unique)',
    example: 'vertical-blue-deans-blue-hole',
  })
  @ApiQuery({
    name: 'lang',
    required: false,
    description: 'Preferred language (overrides Accept-Language)',
    enum: ['en', 'ru'],
    example: 'en',
  })
  @ApiHeader({
    name: 'accept-language',
    required: false,
    description: 'Language header (used when lang is not provided)',
    example: 'en',
  })
  get(
    @Param('slug') slug: string,
    @Query('lang') lang?: string,
    @Headers('accept-language') acceptLanguage?: string,
  ) {
    const resolvedLang = lang ?? acceptLanguage;
    return this.culture.getArticleBySlug(slug, resolvedLang);
  }
}
