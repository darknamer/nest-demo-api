import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthCheck, HealthCheckResult, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';

@Controller('app/health')
@ApiTags('Health')
export class HealthController {

    constructor(
        private readonly health: HealthCheckService,
        private readonly http: HttpHealthIndicator,
    ) { }

    @Get('ping')
    @ApiResponse({ status: 201, type: String })
    ping() {
        return "pong";
    }

    @Get('check')
    @HealthCheck()
    @ApiResponse({ status: 201 })
    async check(): Promise<HealthCheckResult> {
        return await this.health.check([
            () => this.http.pingCheck('localhost', `http://${process.env.API_URL}:${process.env.API_PORT}/app/health/ping`),
            () => this.http.pingCheck('job', `http://${process.env.JOB_URL}:${process.env.JOB_PORT}/app/health/ping`)
        ]);
    }
}
