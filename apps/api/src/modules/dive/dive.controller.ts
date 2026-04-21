import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiBadRequestResponse,
  ApiHeader,
} from '@nestjs/swagger';
import { DiveService } from './dive.service';
import { LANGUAGE_ENUM } from './dive.constants';
import { DiveListResponseDto } from './dto/dive-list-response.dto';
import { DiveTemplateDto } from './dto/dive-template.dto';
import { DiveRunCreateDto } from './dto/dive-run-create.dto';
import { DiveRunCreateResponseDto } from './dto/dive-run-create-response.dto';
import { JwtAccessGuard } from '../auth/guards/jwt-access.guard';
import {
  CurrentUser,
  CurrentUserType,
} from '../auth/decorators/current-user.decorator';

@ApiTags('Dive')
@Controller('dive')
export class DiveController {
  constructor(private readonly dive: DiveService) {}

  @Get('templates')
  @ApiOperation({
    summary:
      'List dive templates (localized). Premium dives are locked for now.',
  })
  @ApiOkResponse({ type: DiveListResponseDto })
  @ApiQuery({
    name: 'lang',
    required: false,
    enum: LANGUAGE_ENUM,
    example: 'en',
  })
  @ApiHeader({ name: 'accept-language', required: false, example: 'en' })
  @ApiBadRequestResponse({ description: 'Validation error' })
  list(
    @Query('lang') lang?: string,
    @Headers('accept-language') acceptLanguage?: string,
  ) {
    const resolvedLang = lang ?? acceptLanguage;
    return this.dive.listTemplates(resolvedLang);
  }

  @Get('templates/:slug')
  @ApiOperation({
    summary: 'Get dive template by slug (localized) + profile points (8-12)',
  })
  @ApiOkResponse({ type: DiveTemplateDto })
  @ApiParam({ name: 'slug', example: 'dive-1' })
  @ApiQuery({
    name: 'lang',
    required: false,
    enum: LANGUAGE_ENUM,
    example: 'en',
  })
  @ApiHeader({ name: 'accept-language', required: false, example: 'en' })
  get(
    @Param('slug') slug: string,
    @Query('lang') lang?: string,
    @Headers('accept-language') acceptLanguage?: string,
  ) {
    const resolvedLang = lang ?? acceptLanguage;
    return this.dive.getTemplateBySlug(slug, resolvedLang);
  }

  @Post('run')
  @UseGuards(JwtAccessGuard)
  @ApiBearerAuth('access-token')
  @ApiConsumes('application/json')
  @ApiOperation({
    summary:
      'Save a dive result (press & hold). Backend computes maxDepthMeters from profile points.',
  })
  @ApiOkResponse({ type: DiveRunCreateResponseDto })
  @ApiUnauthorizedResponse({
    description: 'Missing/invalid access token OR premium dive locked',
  })
  @ApiBadRequestResponse({ description: 'Validation error' })
  createRun(
    @CurrentUser() user: CurrentUserType,
    @Body() dto: DiveRunCreateDto,
  ) {
    return this.dive.createRun(user.userId, dto);
  }

  @Delete('run/:id')
  @UseGuards(JwtAccessGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Delete a dive run by id' })
  @ApiNoContentResponse({ description: 'Dive run deleted' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized / not your run' })
  @ApiNotFoundResponse({ description: 'Dive run not found' })
  @ApiParam({ name: 'id', example: 'ck...' })
  deleteRun(
    @CurrentUser() user: CurrentUserType,
    @Param('id') id: string,
  ) {
    return this.dive.deleteRun(user.userId, id);
  }
}
