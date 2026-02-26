import { ApiProperty } from '@nestjs/swagger';

export class TrainingStepDto {
  @ApiProperty({
    enum: ['INHALE', 'HOLD', 'EXHALE', 'REST'],
    example: 'INHALE',
  })
  phase!: 'INHALE' | 'HOLD' | 'EXHALE' | 'REST';

  @ApiProperty({ example: 25, minimum: 1 })
  durationSeconds!: number;
}
