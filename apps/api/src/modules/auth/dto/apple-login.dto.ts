import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class AppleLoginDto {
  @ApiProperty({
    description: 'Apple identityToken (JWT) from Sign in with Apple',
    example: 'eyJraWQiOiJ...<snip>',
  })
  @IsString()
  @MinLength(20)
  token!: string;
}
