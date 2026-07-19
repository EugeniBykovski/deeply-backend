import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { EntitlementModule } from '../entitlement/entitlement.module';
import { PurchasesController } from './purchases.controller';
import { PurchasesService } from './purchases.service';

@Module({
  imports: [DatabaseModule, EntitlementModule],
  controllers: [PurchasesController],
  providers: [PurchasesService],
  exports: [PurchasesService],
})
export class PurchasesModule {}
