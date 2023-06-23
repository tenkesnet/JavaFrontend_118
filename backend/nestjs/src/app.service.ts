import { Injectable, Global } from '@nestjs/common';

@Global()
@Injectable()
export class AppService {
  getHello(): string {
    return 'Szia Pallas!';
  }
}
