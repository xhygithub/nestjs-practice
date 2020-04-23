import { Controller, Get } from '@nestjs/common';
import { DNSHealthIndicator, HealthCheck, HealthCheckService } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(private dns: DNSHealthIndicator, private health: HealthCheckService,) {}

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.health.check([
      () => this.dns.pingCheck('google', 'https://google.com'),
    ]);
  }
}
