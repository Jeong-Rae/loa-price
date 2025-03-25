import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { ControllerResponse } from './controller-response';

@Injectable()
export class ControllerResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((data) => {
                if (data instanceof ControllerResponse) {
                    const response = context.switchToHttp().getResponse();
                    response.status(data.statusCode);
                    return data.body;
                }
                return data;
            }),
        );
    }
}
