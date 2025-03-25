import { ErrorCode } from './error-code';

export type ApplicationError = {
    code: string;
    httpStatus: number;
    message: string;
    detail?: unknown;
};

export function ApplicationErrorFactory(
    { code, httpStatus, message }: ErrorCode,
    detail?: unknown,
): ApplicationError {
    return {
        code,
        httpStatus,
        message,
        detail,
    };
}
