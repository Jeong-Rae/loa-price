export class ControllerResponse<T> {
    constructor(
        public readonly statusCode: number,
        public readonly body: T,
    ) {}

    static ok<T>(body: T): ControllerResponse<T> {
        return new ControllerResponse(200, body);
    }

    static error<T>(statusCode: number, body: T): ControllerResponse<T> {
        return new ControllerResponse(statusCode, body);
    }
}
