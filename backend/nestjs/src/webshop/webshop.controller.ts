import { WebshopService } from './webshop.service';
import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';
import { ConfigService } from '@nestjs/config';

@Controller('/shop')
export class WebshopController {
  constructor(private readonly webshopService: WebshopService, private readonly config: ConfigService) {}

  @Get()
  getHello(): string {
    return `Hello ${this.config.get('WEBSHOP_NAME')}`;
  }
}
