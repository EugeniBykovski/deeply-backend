import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { EntitlementModule } from '../entitlement/entitlement.module';
import { DiveController } from './dive.controller';
import { DiveService } from './dive.service';

@Module({
  imports: [DatabaseModule, EntitlementModule],
  controllers: [DiveController],
  providers: [DiveService],
})
export class DiveModule {}
