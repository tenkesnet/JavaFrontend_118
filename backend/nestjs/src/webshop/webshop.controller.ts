import { WebshopService } from './webshop.service';
import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('/shop')
export class WebshopController {
  constructor(private readonly webshopService: WebshopService) {}

  @Get()
  getHello(): string {
    return 'Hello webshop';
  }
}
