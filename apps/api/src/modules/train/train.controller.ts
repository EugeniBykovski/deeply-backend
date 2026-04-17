import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
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
import { TrainService } from './train.service';
import { TrainingDetailDto } from './dto/training-detail.dto';
import { CreatePrivateTrainingDto } from './dto/create-private-training.dto';
import { CreateTrainingRunDto } from './dto/create-training-run.dto';
import { JwtAccessGuard } from '../auth/guards/jwt-access.guard';
import { OptionalJwtAccessGuard } from '../auth/guards/optional-jwt-access.guard';
import {
  CurrentUser,
  CurrentUserType,
} from '../auth/decorators/current-user.decorator';
import { LANGUAGE_ENUM } from './train.constants';

@ApiTags('Train')
@Controller('train')
export class TrainController {
  constructor(private readonly train: TrainService) {}

  @Get('blocks')
  @ApiOperation({ summary: 'Get Train tab blocks (programs + Private Train)' })
  @ApiOkResponse({
    description: 'Blocks for Train tab',
    schema: {
      example: {
        blocks: [
          {
            key: 'BEGINNER',
            slug: 'beginner',
            title: 'Beginner training',
            description: '...',
            totalTrainings: 20,
            freeTrainings: 10,
            premiumTrainings: 10,
          },
          {
            key: 'PRIVATE',
            slug: 'private',
            title: 'Private Train',
            description: '...',
            totalTrainings: 0,
            freeTrainings: 0,
            premiumTrainings: 0,
          },
        ],
      },
    },
  })
  @ApiQuery({
    name: 'lang',
    required: false,
    enum: LANGUAGE_ENUM,
    example: 'en',
  })
  @ApiHeader({ name: 'accept-language', required: false, example: 'en' })
  blocks(
    @Query('lang') lang?: string,
    @Headers('accept-language') acceptLanguage?: string,
  ) {
    const resolvedLang = lang ?? acceptLanguage;
    return this.train.getBlocks(resolvedLang);
  }

  /**
   * Lists trainings in a program.
   * Uses OptionalJwtAccessGuard so authenticated users get per-training
   * run-status fields (lastRunStatus) while unauthenticated users get the
   * same list with lastRunStatus: null on every item.
   */
  @Get('programs/:slug/trainings')
  @UseGuards(OptionalJwtAccessGuard)
  @ApiOperation({
    summary: 'List trainings in a program (20 items, localized)',
  })
  @ApiOkResponse({
    schema: {
      example: {
        program: { key: 'BEGINNER', slug: 'beginner' },
        items: [
          {
            id: 'ck...',
            slug: 'beginner-train-1',
            title: 'Train 1',
            isPremium: false,
            isLocked: false,
            lastRunStatus: 'completed',
            lang: 'en',
          },
        ],
      },
    },
  })
  @ApiNotFoundResponse({ description: 'Program not found' })
  @ApiParam({ name: 'slug', example: 'beginner', description: 'Program slug' })
  @ApiQuery({
    name: 'lang',
    required: false,
    enum: LANGUAGE_ENUM,
    example: 'en',
  })
  @ApiHeader({ name: 'accept-language', required: false, example: 'en' })
  listProgramTrainings(
    @Param('slug') slug: string,
    @Query('lang') lang?: string,
    @Headers('accept-language') acceptLanguage?: string,
    @CurrentUser() user?: CurrentUserType | null,
  ) {
    const resolvedLang = lang ?? acceptLanguage;
    return this.train.listProgramTrainings({
      programSlug: slug,
      lang: resolvedLang,
      userId: user?.userId ?? null,
    });
  }

  @Get('trainings/:slug')
  @ApiOperation({ summary: 'Get training by slug (steps included)' })
  @ApiOkResponse({ type: TrainingDetailDto })
  @ApiNotFoundResponse({ description: 'Training not found' })
  @ApiParam({
    name: 'slug',
    example: 'beginner-train-1',
    description: 'Training slug',
  })
  @ApiQuery({
    name: 'lang',
    required: false,
    enum: LANGUAGE_ENUM,
    example: 'en',
  })
  @ApiHeader({ name: 'accept-language', required: false, example: 'en' })
  getTraining(
    @Param('slug') slug: string,
    @Query('lang') lang?: string,
    @Headers('accept-language') acceptLanguage?: string,
  ) {
    const resolvedLang = lang ?? acceptLanguage;
    return this.train.getTrainingBySlug(slug, resolvedLang);
  }

  @Get('private')
  @UseGuards(JwtAccessGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'List private trainings for current user' })
  @ApiOkResponse({
    schema: {
      example: {
        items: [
          {
            id: 'ck...',
            name: 'My Private Train',
            repeats: 5,
            steps: [{ phase: 'INHALE', durationSeconds: 25 }],
          },
        ],
      },
    },
  })
  @ApiUnauthorizedResponse({ description: 'Missing/invalid access token' })
  privateList(@CurrentUser() user: CurrentUserType) {
    return this.train.listPrivateTemplates(user.userId);
  }

  /**
   * Creates a personal/private training.
   * Auth is optional — anyone can create a training.
   * If the user is authenticated, the training is associated with their account.
   */
  @Post('private')
  @UseGuards(OptionalJwtAccessGuard)
  @ApiOperation({
    summary: 'Create a private training template (no auth required)',
  })
  @ApiOkResponse({ schema: { example: { id: 'ck...' } } })
  @ApiBadRequestResponse({ description: 'Validation error' })
  createPrivate(
    @CurrentUser() user: CurrentUserType | null,
    @Body() dto: CreatePrivateTrainingDto,
  ) {
    return this.train.createPrivateTemplate(user?.userId ?? null, dto);
  }

  @Post('runs')
  @UseGuards(JwtAccessGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Save training run result' })
  @ApiOkResponse({
    schema: { example: { id: 'ck...', startedAt: '2026-02-26T12:00:00.000Z' } },
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized / premium locked / not your private training',
  })
  @ApiNotFoundResponse({ description: 'Training template not found' })
  createRun(
    @CurrentUser() user: CurrentUserType,
    @Body() dto: CreateTrainingRunDto,
  ) {
    return this.train.createRun(user.userId, dto);
  }
}
