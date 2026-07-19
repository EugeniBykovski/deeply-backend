import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { EntitlementService } from '../../entitlement/entitlement.service';
import { SKIP_PREMIUM_KEY } from '../decorators/require-pro.decorator';

/**
 * Guards any route that requires an active "Deeply Pro" subscription.
 * Must be used together with JwtAccessGuard (JWT guard runs first).
 *
 * Usage:
 *   @UseGuards(JwtAccessGuard, PremiumGuard)
 *   @Get('premium-feature')
 *   getPremiumContent() { ... }
 *
 * To explicitly opt-out on a handler inside a class-level guarded controller:
 *   @SkipPremium()
 *   @Get('free-feature')
 *   getFreeContent() { ... }
 */
@Injectable()
export class PremiumGuard implements CanActivate {
  constructor(
    private readonly entitlement: EntitlementService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const skip = this.reflector.getAllAndOverride<boolean>(SKIP_PREMIUM_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (skip) return true;

    const req = context.switchToHttp().getRequest();
    const userId: string | undefined = req.user?.userId;
    if (!userId) throw new ForbiddenException('Authentication required');

    const hasFullAccess = await this.entitlement.hasFullAccess(userId);

    if (!hasFullAccess) {
      throw new ForbiddenException('Deeply Pro subscription required');
    }

    return true;
  }
}
