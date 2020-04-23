import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { DNSHealthIndicator, HealthCheckService } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/common';
import { HealthCheckExecutor } from '@nestjs/terminus/dist/health-check/health-check-executor.service';

describe('Health Controller', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [HealthController],
      providers: [DNSHealthIndicator,HealthCheckService, HealthCheckExecutor]
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
