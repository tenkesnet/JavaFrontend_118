import { Module } from '@nestjs/common';
import { AppService } from '../app.service';
import { WebshopController } from './webshop.controller';

@Module({
  imports: [],
  controllers: [WebshopController],
  providers: [AppService],
})
export class WebshopModule {}
