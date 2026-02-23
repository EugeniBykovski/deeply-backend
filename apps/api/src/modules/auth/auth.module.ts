import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from '../../database/database.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AppleTokenService } from './apple-token.service';
import { TokenService } from './token.service';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';

@Module({
  imports: [DatabaseModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, AppleTokenService, TokenService, JwtAccessStrategy],
  exports: [AuthService],
})
export class AuthModule {}
