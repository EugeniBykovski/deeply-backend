import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class DiveRunCreateDto {
  @ApiProperty({ description: 'Dive template id', example: 'ck...' })
  @IsString()
  templateId!: string;

  @ApiProperty({
    description: 'How long user held the button/breath',
    example: 72,
  })
  @IsInt()
  @Min(0)
  holdSeconds!: number;

  @ApiPropertyOptional({
    description:
      'Mark as completed (client suggestion). Backend will set true if holdSeconds>0',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @ApiPropertyOptional({
    description: 'Optional metrics (pulse, notes, etc.)',
    example: { pulseBefore: 72, pulseAfter: 60 },
  })
  @IsOptional()
  metrics?: any;
}
