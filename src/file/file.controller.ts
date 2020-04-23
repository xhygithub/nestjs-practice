import { Controller, Get, Param, ParseIntPipe, Post, Query, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { FileService } from './file.service';
import { FileDto } from '../dto/file.dto';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    console.log(file);
  }

  @Get()
  async getFiles(@Req() request: Request) {
    const result = await this.fileService.findAll();
    return {result: result.toString()}
  }

  @Get(':id/all')
  async findBy(@Param('id', ParseIntPipe) id: number, @Query() fileDto: FileDto) {
    const result = await this.fileService.findAll();
    return {result: result.toString()}
  }
}
