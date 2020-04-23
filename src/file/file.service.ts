import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class FileService {
  constructor(private httpService: HttpService) {}
    findAll(): Promise<any> {
      return this.httpService.get('http://www.baidu.com').toPromise();
  }
}
