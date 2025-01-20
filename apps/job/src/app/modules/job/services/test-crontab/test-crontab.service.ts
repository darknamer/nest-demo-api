import { Injectable, Logger, LoggerService } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TestCrontabService {

    private readonly logger: LoggerService;

    constructor() {
        this.logger = new Logger(TestCrontabService.name);
    }

    @Cron(CronExpression.EVERY_10_SECONDS)
    handleCron() {
        this.logger.log('Called when the current second is 10');
    }
}
