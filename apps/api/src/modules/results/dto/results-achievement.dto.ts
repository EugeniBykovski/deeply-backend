import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ResultsAchievementDto {
  @ApiProperty({ example: 'STREAK_7' }) type!: string;
  @ApiProperty({ example: 'GLOBAL' }) scopeKey!: string;

  @ApiProperty({ example: '2026-02-27T10:10:10.000Z' })
  unlockedAt!: string;

  @ApiPropertyOptional({ example: { streakDays: 7 } })
  payload?: any;
}
