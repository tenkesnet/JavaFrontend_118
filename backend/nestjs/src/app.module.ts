import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebshopModule } from './webshop/webshop.module';

@Module({
  imports: [WebshopModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
