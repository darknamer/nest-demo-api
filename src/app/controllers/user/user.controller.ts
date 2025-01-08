import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/app/services/user/user.service';

@Controller('api/user')
@ApiTags('user')
export class UserController {

    constructor(
        private readonly user: UserService,
    ) { }

    @Get('all')
    async allUsers() {
        return await this.user.all();
    }
}
