import {
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  Headers,
  BadRequestException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAccessGuard } from '../auth/guards/jwt-access.guard';
import { CurrentUser, CurrentUserType } from '../auth/decorators/current-user.decorator';
import { PurchasesService } from './purchases.service';
import { SubscriptionStatusDto } from './dto/subscription-status.dto';

@ApiTags('Purchases')
@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchases: PurchasesService) {}

  /**
   * RevenueCat webhook — no auth, signature verified inside service.
   * Register this URL in RevenueCat dashboard:
   *   https://your-api.com/purchases/webhook
   */
  @Post('webhook')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'RevenueCat webhook receiver' })
  async webhook(
    @Req() req: Request,
    @Headers('authorization') signature: string | undefined,
  ) {
    const rawBody = (req as any).rawBody as string | undefined;
    if (!rawBody) throw new BadRequestException('Missing raw body');

    await this.purchases.handleWebhook(rawBody, signature);
    return { ok: true };
  }

  /**
   * Returns the current subscription status for the authenticated user.
   */
  @Get('me')
  @UseGuards(JwtAccessGuard)
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Get subscription status' })
  @ApiOkResponse({ type: SubscriptionStatusDto })
  async status(@CurrentUser() user: CurrentUserType) {
    return this.purchases.getStatus(user.userId);
  }

  /**
   * Forces a sync with RevenueCat REST API for the current user.
   * Call this after a successful purchase in the app.
   */
  @Post('sync')
  @UseGuards(JwtAccessGuard)
  @ApiBearerAuth('access-token')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Sync subscription from RevenueCat' })
  @ApiOkResponse({ type: SubscriptionStatusDto })
  async sync(@CurrentUser() user: CurrentUserType) {
    await this.purchases.syncSubscription(user.userId);
    return this.purchases.getStatus(user.userId);
  }
}
