import { Controller, NotFoundException, Param, Post } from '@nestjs/common';
import { CrawlerService } from './crawler.service';
import { SiteRegistryService } from "./registry/site-registry.service";

@Controller('crawler')
export class CrawlerController {
    constructor(
        private readonly crawlerService: CrawlerService,
        private readonly siteRegistry: SiteRegistryService
    ) {
    }

    @Post(':siteName')
    async crawlBySite(@Param('siteName') siteName: string) {
        const site = this.siteRegistry
                         .getSiteConfigs()
                         .find((site) => site.siteName.toLowerCase() === siteName.toLowerCase());

        if (!site) {
            throw new NotFoundException(`${siteName} is not found`);
        }

        await this.crawlerService.crawlAndStore(site);

        return {
            success: true
        }
    }
}
