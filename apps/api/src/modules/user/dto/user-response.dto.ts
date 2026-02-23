import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty()
  id!: string;

  @ApiPropertyOptional()
  email?: string | null;

  @ApiProperty()
  appleSub!: string;
}
