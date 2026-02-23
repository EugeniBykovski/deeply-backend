import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConsumes,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { AppleLoginDto } from './dto/apple-login.dto';
import { RefreshDto } from './dto/refresh.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { RefreshResponseDto } from './dto/refresh-response.dto';
import { JwtAccessGuard } from './guards/jwt-access.guard';
import {
  CurrentUser,
  CurrentUserType,
} from './decorators/current-user.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('apple')
  @ApiConsumes('application/json')
  @ApiOperation({
    summary: 'Login with Apple (create user if needed + issue access/refresh)',
  })
  @ApiOkResponse({ type: AuthResponseDto })
  @ApiBadRequestResponse({ description: 'Validation error' })
  @ApiUnauthorizedResponse({ description: 'Invalid Apple identity token' })
  async apple(@Body() dto: AppleLoginDto) {
    return this.auth.loginWithApple(dto.token);
  }

  @Post('refresh')
  @ApiConsumes('application/json')
  @ApiOperation({ summary: 'Refresh access token (refresh rotation enabled)' })
  @ApiOkResponse({ type: RefreshResponseDto })
  @ApiBadRequestResponse({ description: 'Validation error' })
  @ApiUnauthorizedResponse({
    description: 'Refresh token invalid/expired/revoked/reuse detected',
  })
  async refresh(@Body() dto: RefreshDto) {
    return this.auth.refresh(dto.refreshToken);
  }

  @Delete('account')
  @UseGuards(JwtAccessGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Delete account (Apple review requirement)' })
  @ApiNoContentResponse({ description: 'Account deleted' })
  @ApiUnauthorizedResponse({ description: 'Missing/invalid access token' })
  @HttpCode(204)
  async deleteAccount(@CurrentUser() user: CurrentUserType): Promise<void> {
    await this.auth.deleteAccount(user.userId);
  }
}
