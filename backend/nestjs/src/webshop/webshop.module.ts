import { Module } from '@nestjs/common';
import { AppService } from '../app.service';
import { WebshopController } from './webshop.controller';
import { WebshopService } from './webshop.service';

@Module({
  imports: [],
  controllers: [WebshopController],
  providers: [WebshopService],
})
export class WebshopModule {}
