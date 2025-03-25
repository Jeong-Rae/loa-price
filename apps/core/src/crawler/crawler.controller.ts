import { Controller, Param, Post } from '@nestjs/common';
import { CrawlerService } from './crawler.service';
import { SiteRegistryService } from './registry/site-registry.service';
import { defer, from, iif, map, mergeMap, Observable, of } from 'rxjs';
import { ControllerResponse } from '../common/response/controller-response';
import { CRAWL_ERROR_CODE } from './error/crawl-error-code';
import { ApplicationError } from '../common/errors/application-error';
import { isNil } from 'es-toolkit';
import { ErrorBody } from '../common/response/error-body';

@Controller('crawler')
export class CrawlerController {
    constructor(
        private readonly crawlerService: CrawlerService,
        private readonly siteRegistry: SiteRegistryService,
    ) {}

    @Post(':siteName')
    crawlBySite(
        @Param('siteName') siteName: string,
    ): Observable<ControllerResponse<{ success: true } | ErrorBody>> {
        return of(this.siteRegistry.getSiteConfigs()).pipe(
            map((sites) =>
                sites.find((site) => site.siteName.toLowerCase() === siteName.toLowerCase()),
            ),
            mergeMap((site) =>
                isNil(site)
                    ? of(
                          ControllerResponse.error(
                              ApplicationError.of(CRAWL_ERROR_CODE.INVALID_SITE, { siteName }),
                          ),
                      )
                    : defer(() =>
                          from(this.crawlerService.crawlAndStore(site)).pipe(
                              map(() => ControllerResponse.ok({ success: true } as const)),
                          ),
                      ),
            ),
        );
    }
}
