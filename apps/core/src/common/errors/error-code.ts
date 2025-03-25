export const ERROR_CODE = {
    INTERNAL_ERROR: {
        code: 'INTERNAL_ERROR',
        httpStatus: 500,
        message: 'Internal server error',
    } as const,
} as const;

export type ErrorCode = (typeof ERROR_CODE)[keyof typeof ERROR_CODE];
