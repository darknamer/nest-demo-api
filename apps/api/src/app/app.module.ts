import { Module } from '@nestjs/common';
import { CoreModule } from '@app/core';
import { DataModule } from '@app/data';
import { ApiModule } from './modules/api/api.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    CoreModule,
    DataModule,
    ApiModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
