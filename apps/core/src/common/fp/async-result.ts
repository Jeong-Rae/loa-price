import { TaskEither } from 'fp-ts/TaskEither';
import { ApplicationError } from '../errors/application-error';

export type AsyncResult<T> = TaskEither<ApplicationError, T>;
