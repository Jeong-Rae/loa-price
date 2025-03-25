import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerController } from './crawler.controller';
import { CrawlerService } from './crawler.service';
import { SiteRegistryService } from './registry/site-registry.service';
import { SiteConfig } from './type/site-config';

describe('CrawlerController', () => {
    let controller: CrawlerController;

    beforeEach(async () => {
        const mockCrawlerService = {
            crawlAndStore: jest.fn(),
        };

        const mockSiteRegistryService = {
            getSiteConfigs: jest.fn().mockReturnValue([
                {
                    siteName: 'gmarket',
                    url: 'https://dummy.url',
                    strategy: {
                        crawl: jest.fn().mockResolvedValue('<html>dummy</html>'),
                    },
                    parser: {
                        parse: jest.fn().mockReturnValue({ parsed: 'dummy' }),
                    },
                } as SiteConfig,
            ]),
        };

        const module: TestingModule = await Test.createTestingModule({
            controllers: [CrawlerController],
            providers: [
                {
                    provide: CrawlerService,
                    useValue: mockCrawlerService,
                },
                {
                    provide: SiteRegistryService,
                    useValue: mockSiteRegistryService,
                },
            ],
        }).compile();

        controller = module.get<CrawlerController>(CrawlerController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
