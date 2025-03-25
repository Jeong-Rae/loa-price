import { ApplicationError } from "../errors/application-error";

export class ControllerResponse<T> {
    constructor(
        public readonly statusCode: number,
        public readonly body: T,
    ) {}

    static ok<T>(body: T): ControllerResponse<T> {
        return new ControllerResponse(200, body);
    }

    static error(error: ApplicationError): ControllerResponse<{
        errorCode: string;
        message: string;
        detail?: unknown;
    }> {
        return new ControllerResponse(error.httpStatus, {
            errorCode: error.code,
            message: error.message,
            detail: error.detail,
        });
    }
}
