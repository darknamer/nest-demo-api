import { ApiProperty } from '@nestjs/swagger';
import { ModelBase } from '../base/model-base/model-base';

export class User extends ModelBase {
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
