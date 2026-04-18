import { SetMetadata } from '@nestjs/common';

export const SKIP_PREMIUM_KEY = 'skipPremium';

/** Skip the PremiumGuard on this route even if the controller applies it. */
export const SkipPremium = () => SetMetadata(SKIP_PREMIUM_KEY, true);
