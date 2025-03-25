import {CrawlingStrategy} from "../strategies/crawling-strategy.interface";
import {Parser} from "../parsers/parser.interface";

export interface SiteConfig {
    siteName: string;
    url: string;
    strategy: CrawlingStrategy;
    parser: Parser;
}