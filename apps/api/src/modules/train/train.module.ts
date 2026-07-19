import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { EntitlementModule } from '../entitlement/entitlement.module';
import { TrainController } from './train.controller';
import { TrainService } from './train.service';

@Module({
  imports: [DatabaseModule, EntitlementModule],
  controllers: [TrainController],
  providers: [TrainService],
})
export class TrainModule {}
