import { ApiProperty } from '@nestjs/swagger';
import { DiveTemplateItemDto } from './dive-template-item.dto';

export class DiveListResponseDto {
  @ApiProperty({ type: [DiveTemplateItemDto] })
  items!: DiveTemplateItemDto[];
}
