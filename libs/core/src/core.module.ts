import { Module } from '@nestjs/common';
import { UserService } from './services/databases/users/user/user.service';
import { DataModule } from '@app/data';

@Module({
  imports: [
    DataModule,
  ],
  providers: [
    UserService,
  ],
  exports: [],
})
export class CoreModule {}
