import { Module } from '@nestjs/common';
import { UserService } from './services/databases/users/user/user.service';
import { DataModule } from '@app/data';

const databases = [
  UserService,
];

@Module({
  imports: [
    DataModule,
  ],
  providers: [
    ...databases,
  ],
  exports: [
    ...databases,
  ],
})
export class CoreModule {}
