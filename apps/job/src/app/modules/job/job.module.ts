import { CoreModule } from '@app/core';
import { DataModule } from '@app/data';
import { Module } from '@nestjs/common';
import { TestCrontabService } from './services/test-crontab/test-crontab.service';

@Module({
    imports: [
        CoreModule,
        DataModule,
    ],
    providers: [TestCrontabService]
})
export class JobModule { }
