import { CoreModule } from '@app/core';
import { DataModule } from '@app/data';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        CoreModule,
        DataModule,
    ]
})
export class JobModule { }
