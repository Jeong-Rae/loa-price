import { ErrorCode } from './error-code';

export class ApplicationError extends Error {
    constructor(
        public readonly code: string,
        public readonly httpStatus: number,
        public readonly detail?: unknown,
    ) {
        super(code);
        this.name = 'ApplicationError';
    }

    static of(errorCode: ErrorCode, detail?: unknown): ApplicationError {
        return new ApplicationError(errorCode.code, errorCode.httpStatus, detail);
    }

    static is(e: unknown): e is ApplicationError {
        return e instanceof ApplicationError;
    }
}
