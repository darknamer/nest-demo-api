import { Module } from '@nestjs/common';
import { UserService } from './services/databases/users/user/user.service';
import { DataModule } from '@app/data';
import { ValueService } from './services/value/value.service';

const databases = [
  UserService,
];

const services = [
  ValueService,
];

@Module({
  imports: [
    DataModule,
  ],
  providers: [
    ...databases,
    ...services,
  ],
  exports: [
    ...databases,
    ...services,
  ],
})
export class CoreModule {}
