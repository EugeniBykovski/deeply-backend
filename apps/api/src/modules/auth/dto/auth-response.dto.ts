import { ApiProperty } from '@nestjs/swagger';

class AuthUserDto {
  @ApiProperty() id!: string;
  @ApiProperty({ required: false, nullable: true }) email?: string | null;
  @ApiProperty() appleSub!: string;
}

export class AuthResponseDto {
  @ApiProperty() accessToken!: string;
  @ApiProperty() refreshToken!: string;
  @ApiProperty({ type: AuthUserDto }) user!: AuthUserDto;
}
