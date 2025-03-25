export interface CrawlingStrategy {
    crawl(url: string): Promise<string>;
}
