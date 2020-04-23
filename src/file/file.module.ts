import {
  HttpModule,
  Module,
} from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';

@Module({
  imports: [HttpModule],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}