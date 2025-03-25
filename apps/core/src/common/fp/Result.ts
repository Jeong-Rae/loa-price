import { Either, left, right } from "fp-ts/Either";
import { ApplicationError } from "../errors/application-error";

export type Result<T> = Either<ApplicationError, T>;

export const Result = {
    ok: <T>(value: T): Result<T> => right(value),
    fail: (error: ApplicationError): Result<never> => left(error)
}