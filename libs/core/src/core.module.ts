import { Module } from '@nestjs/common';
import { UserService } from './services/databases/users/user/user.service';
import { DataModule } from '@app/data';
import { ValueService } from './services/value/value.service';
import { HttpModule } from '@nestjs/axios';

const module = {
  imports: [
    HttpModule,
  ],
  exports: [
    HttpModule,
  ]
};
const databases = [
  UserService,
];

const services = [
  ValueService,
];

@Module({
  imports: [
    DataModule,
    ...module.imports,
  ],
  providers: [
    ...databases,
    ...services,
  ],
  exports: [
    ...module.exports,
    ...databases,
    ...services,
  ],
})
export class CoreModule {}
