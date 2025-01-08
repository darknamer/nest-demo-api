import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { AppService } from 'src/app/services/app/app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags("app")
export class AppController {
  
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
