import { Module } from '@nestjs/common';
import { CoreModule } from '@app/core';
import { DataModule } from '@app/data';
import { ApiModule } from './modules/api/api.module';

@Module({
  imports: [
    CoreModule,
    DataModule,
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
