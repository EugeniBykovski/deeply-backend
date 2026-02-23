import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class RefreshDto {
  @ApiProperty({
    description: 'Refresh token (JWT)',
    example: 'eyJhbGciOiJI...<snip>',
  })
  @IsString()
  @MinLength(20)
  refreshToken!: string;
}
