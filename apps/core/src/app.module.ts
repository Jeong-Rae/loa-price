import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CrawlerModule } from './crawler/crawler.module';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [CrawlerModule],
})
export class AppModule {}
