import { WebshopService } from './webshop.service';
import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';
import { ConfigService } from '@nestjs/config';

@Controller('/shop')
export class WebshopController {
  constructor(private readonly webshop: WebshopService, private readonly config: ConfigService) {}

  @Get('categories')
  categorys() {
    return this.webshop.findAllCategorys();
  }

  @Get('products')
  products() {
    return this.webshop.findAllProducts();
  }

  @Get('groups')
  groups() {
    return this.webshop.findAllGroups();
  }

  @Get('categories/count')
  categorysCount() {
    return this.webshop.findAllCategorysCount();
  }
}
