import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { CultureModule } from './modules/culture/culture.module';
import { TrainModule } from './modules/train/train.module';
import { ResultsModule } from './modules/results/results.module';
import { DiveModule } from './modules/dive/dive.module';
import { PurchasesModule } from './modules/purchases/purchases.module';
import { EntitlementModule } from './modules/entitlement/entitlement.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    CultureModule,
    TrainModule,
    ResultsModule,
    DiveModule,
    PurchasesModule,
    EntitlementModule,
  ],
})
export class AppModule {}
