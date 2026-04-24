import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty() accessToken!: string;
  @ApiProperty() refreshToken!: string;
  /** True when the Apple Sign-In just created a brand-new account. */
  @ApiProperty() isNewUser!: boolean;
}
