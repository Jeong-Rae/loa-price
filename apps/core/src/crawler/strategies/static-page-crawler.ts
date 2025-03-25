import { CrawlingStrategy } from './crawling-strategy.interface';
import axios from 'axios';

export class StaticPageCrawler implements CrawlingStrategy {
    async crawl(url: string): Promise<string> {
        const response = await axios.get(url);
        return response.data;
    }
}
