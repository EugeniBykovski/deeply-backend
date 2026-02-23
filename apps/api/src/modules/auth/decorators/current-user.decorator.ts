import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export type CurrentUserType = { userId: string };

export const CurrentUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): CurrentUserType => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
