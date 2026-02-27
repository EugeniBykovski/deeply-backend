import { ApiProperty } from '@nestjs/swagger';
import { ResultsProgramProgressDto } from './results-program-progress.dto';
import { ResultsPrivateItemDto } from './results-private-item.dto';
import { ResultsAchievementDto } from './results-achievement.dto';

export class ResultsSummaryDto {
  @ApiProperty({ type: [ResultsProgramProgressDto] })
  programs!: ResultsProgramProgressDto[];

  @ApiProperty({ type: [ResultsPrivateItemDto] })
  privateTrainings!: ResultsPrivateItemDto[];

  @ApiProperty({ type: [ResultsAchievementDto] })
  achievements!: ResultsAchievementDto[];

  @ApiProperty({
    example: { totalRuns: 42, currentStreakDays: 3 },
  })
  overall!: { totalRuns: number; currentStreakDays: number };
}
