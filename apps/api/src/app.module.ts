import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { CultureModule } from './modules/culture/culture.module';
import { TrainModule } from './modules/train/train.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    CultureModule,
    TrainModule,
  ],
})
export class AppModule {}
