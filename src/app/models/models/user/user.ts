import { ApiProperty } from '@nestjs/swagger';

export class User {
    @ApiProperty()
    username: string;
    @ApiProperty()
    first_name: string;
    @ApiProperty()
    last_name: string;
    @ApiProperty()
    email_address: string;
    @ApiProperty()
    birthday: Date;
}
