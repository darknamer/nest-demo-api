import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health/health.controller';
import { CoreModule } from '@app/core';
import { DataModule } from '@app/data';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [
    CoreModule, 
    DataModule,
    TerminusModule,
  ],
  controllers: [
    HealthController,
  ]
})
export class HealthModule {}
