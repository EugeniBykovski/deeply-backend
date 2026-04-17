import {
  Controller,
  Get,
  Headers,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ResultsService } from './results.service';
import { JwtAccessGuard } from '../auth/guards/jwt-access.guard';
import {
  CurrentUser,
  CurrentUserType,
} from '../auth/decorators/current-user.decorator';
import { LANGUAGE_ENUM, RANGE_ENUM } from './results.constants';
import { ResultsSummaryDto } from './dto/results-summary.dto';
import { ResultsTrainingReportDto } from './dto/results-training-report.dto';
import { ResultsPrivateReportDto } from './dto/results-private-report.dto';

@ApiTags('Results')
@ApiBearerAuth('access-token')
@UseGuards(JwtAccessGuard)
@ApiUnauthorizedResponse({ description: 'Missing/invalid access token' })
@Controller('results')
export class ResultsController {
  constructor(private readonly results: ResultsService) {}

  @Get('summary')
  @ApiOperation({
    summary:
      'Results summary (program progress + private trainings + achievements)',
  })
  @ApiOkResponse({ type: ResultsSummaryDto })
  @ApiQuery({
    name: 'lang',
    required: false,
    enum: LANGUAGE_ENUM,
    example: 'en',
  })
  @ApiHeader({ name: 'accept-language', required: false, example: 'en' })
  summary(
    @CurrentUser() user: CurrentUserType,
    @Query('lang') lang?: string,
    @Headers('accept-language') acceptLanguage?: string,
  ) {
    const resolvedLang = lang ?? acceptLanguage;
    return this.results.getSummary(user.userId, resolvedLang);
  }

  @Get('training/:slug')
  @ApiOperation({ summary: 'Training report by training slug (runs + stats)' })
  @ApiOkResponse({ type: ResultsTrainingReportDto })
  @ApiNotFoundResponse({ description: 'Training not found' })
  @ApiParam({ name: 'slug', example: 'beginner-train-1' })
  @ApiQuery({
    name: 'range',
    required: false,
    enum: RANGE_ENUM,
    example: 'month',
  })
  @ApiQuery({
    name: 'lang',
    required: false,
    enum: LANGUAGE_ENUM,
    example: 'en',
  })
  @ApiHeader({ name: 'accept-language', required: false, example: 'en' })
  trainingReport(
    @CurrentUser() user: CurrentUserType,
    @Param('slug') slug: string,
    @Query('range') range?: string,
    @Query('lang') lang?: string,
    @Headers('accept-language') acceptLanguage?: string,
  ) {
    const resolvedLang = lang ?? acceptLanguage;
    return this.results.getTrainingReportBySlug(
      user.userId,
      slug,
      range,
      resolvedLang,
    );
  }

  @Get('program/:slug')
  @ApiOperation({
    summary: 'Program report (done/undone per training + main path 12)',
  })
  @ApiOkResponse({
    schema: {
      example: {
        program: { key: 'BEGINNER', slug: 'beginner' },
        mainTotal: 12,
        completedMain: 6,
        items: [
          {
            id: 'ck..',
            slug: 'beginner-train-1',
            title: 'Train 1',
            isDone: true,
            isMain: true,
          },
        ],
      },
    },
  })
  @ApiNotFoundResponse({ description: 'Program not found' })
  @ApiParam({ name: 'slug', example: 'beginner' })
  @ApiQuery({
    name: 'lang',
    required: false,
    enum: LANGUAGE_ENUM,
    example: 'en',
  })
  @ApiHeader({ name: 'accept-language', required: false, example: 'en' })
  programReport(
    @CurrentUser() user: CurrentUserType,
    @Param('slug') slug: string,
    @Query('lang') lang?: string,
    @Headers('accept-language') acceptLanguage?: string,
  ) {
    const resolvedLang = lang ?? acceptLanguage;
    return this.results.getProgramReport(user.userId, slug, resolvedLang);
  }

  @Get('recent')
  @ApiOperation({ summary: 'Recent training + dive runs (last 20, merged & sorted)' })
  @ApiQuery({ name: 'lang', required: false, enum: LANGUAGE_ENUM, example: 'en' })
  @ApiHeader({ name: 'accept-language', required: false, example: 'en' })
  recentRuns(
    @CurrentUser() user: CurrentUserType,
    @Query('lang') lang?: string,
    @Headers('accept-language') acceptLanguage?: string,
  ) {
    return this.results.getRecentRuns(user.userId, lang ?? acceptLanguage);
  }

  @Get('private/:id')
  @ApiOperation({
    summary: 'Private training report by template id (runs + stats)',
  })
  @ApiOkResponse({ type: ResultsPrivateReportDto })
  @ApiNotFoundResponse({ description: 'Private training not found' })
  @ApiParam({ name: 'id', example: 'ck...' })
  @ApiQuery({
    name: 'range',
    required: false,
    enum: RANGE_ENUM,
    example: 'month',
  })
  privateReport(
    @CurrentUser() user: CurrentUserType,
    @Param('id') id: string,
    @Query('range') range?: string,
  ) {
    return this.results.getPrivateReportById(user.userId, id, range);
  }
}
