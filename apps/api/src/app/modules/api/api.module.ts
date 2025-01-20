import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { CoreModule } from '@app/core';
import { DataModule } from '@app/data';

@Module({
  imports: [
    CoreModule,
    DataModule,
  ],
  controllers: [
    UserController,
  ],
})
export class ApiModule { }
