import { Module } from '@nestjs/common';
import { CrawlerService } from './crawler.service';
import { CrawlerController } from './crawler.controller';
import { StaticPageCrawler } from './strategies/static-page-crawler';
import { ParserProviders } from './parsers';

@Module({
    controllers: [CrawlerController],
    providers: [CrawlerService, StaticPageCrawler, ...ParserProviders],
    exports: [CrawlerService],
})
export class CrawlerModule {}
