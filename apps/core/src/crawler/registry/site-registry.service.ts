import {Injectable} from "@nestjs/common";
import {StaticPageCrawler} from "../strategies/static-page-crawler";
import {GmarketParser} from "../parsers";
import {SiteConfig} from "../type/site-config";
import {CRAWLING_URLS} from "../constants/crawler.constants";

@Injectable()
export class SiteRegistryService {
    constructor(
        private readonly staticCrawler: StaticPageCrawler,
        private readonly gmarketParser: GmarketParser
    ) {
    }

    getSiteConfigs(): SiteConfig[] {
        return [
            {
                siteName: 'gmarket',
                url: CRAWLING_URLS.GMARKET,
                strategy: this.staticCrawler,
                parser: this.gmarketParser
            }
        ]
    }
}