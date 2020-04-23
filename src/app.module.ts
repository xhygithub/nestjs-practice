import { Module } from '@nestjs/common';
import {TerminusModule} from '@nestjs/terminus';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { FileModule } from './file/file.module';

@Module({
  imports: [TerminusModule, FileModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
