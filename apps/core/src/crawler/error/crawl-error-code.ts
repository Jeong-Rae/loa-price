export const CRAWL_ERROR_CODE = {
    INVALID_SITE: {
        code: 'INVALID_SITE',
        httpStatus: 400,
        message: '지원하지 않는 사이트',
    } as const,
} as const;

export type CrawlErrorCode = (typeof CRAWL_ERROR_CODE)[keyof typeof CRAWL_ERROR_CODE];
