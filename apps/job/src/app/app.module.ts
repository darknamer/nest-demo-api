import { Module } from "@nestjs/common";
import { JobModule } from './modules/job/job.module';
import { ScheduleModule } from "@nestjs/schedule";
import { CoreModule } from "@app/core";
import { DataModule } from "@app/data";
import { HealthModule } from "./modules/health/health.module";

@Module({
  imports: [
    CoreModule,
    DataModule,
    ScheduleModule.forRoot(),
    JobModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}