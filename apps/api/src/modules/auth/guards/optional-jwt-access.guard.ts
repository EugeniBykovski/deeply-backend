import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Like JwtAccessGuard but does NOT throw when no token is supplied.
 * If a valid Bearer token is present, `req.user` is populated as usual.
 * If the token is absent or invalid, `req.user` is set to null and the
 * request is allowed through — the handler must treat user as optional.
 */
@Injectable()
export class OptionalJwtAccessGuard extends AuthGuard('jwt-access') {
  canActivate(context: ExecutionContext) {
    // Attempt passport auth but catch all errors silently
    return super.canActivate(context) as Promise<boolean>;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleRequest(_err: any, user: any): any {
    // Return user if authenticated, null otherwise — never throw
    return user ?? null;
  }
}
