import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerService } from './crawler.service';
import { SiteRegistryService } from './registry/site-registry.service';
import { SiteConfig } from './type/site-config';

describe('CrawlerService', () => {
    let service: CrawlerService;

    beforeEach(async () => {
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
            providers: [
                CrawlerService,
                {
                    provide: SiteRegistryService,
                    useValue: mockSiteRegistryService,
                },
            ],
        }).compile();

        service = module.get<CrawlerService>(CrawlerService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
