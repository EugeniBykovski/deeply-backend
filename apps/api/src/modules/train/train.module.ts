import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { TrainController } from './train.controller';
import { TrainService } from './train.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TrainController],
  providers: [TrainService],
})
export class TrainModule {}
