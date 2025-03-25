import {Injectable, Logger} from '@nestjs/common';
import {SiteRegistryService} from "./registry/site-registry.service";
import {SiteConfig} from "./type/site-config";

@Injectable()
export class CrawlerService {
    private readonly logger = new Logger(CrawlerService.name);

    constructor(
        private readonly siteRegistry: SiteRegistryService
    ) {
    }

    async crawlAndStore({url, parser, strategy, siteName}: SiteConfig) {
        try {
            const html = await strategy.crawl(url);
            const parsed = parser.parse(html);
            this.logger.log(parsed);
        } catch (error) {
            this.logger.error(error);
        }
    }
}
