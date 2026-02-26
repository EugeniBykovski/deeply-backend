import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { CultureController } from './culture.controller';
import { CultureService } from './culture.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CultureController],
  providers: [CultureService],
})
export class CultureModule {}
