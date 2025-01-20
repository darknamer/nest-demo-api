import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../services/user/user.service';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from '../../services/app/app.service';

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
