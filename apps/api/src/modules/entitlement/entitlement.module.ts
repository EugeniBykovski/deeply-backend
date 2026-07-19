import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { EntitlementService } from './entitlement.service';

@Module({
  imports: [DatabaseModule],
  providers: [EntitlementService],
  exports: [EntitlementService],
})
export class EntitlementModule {}
