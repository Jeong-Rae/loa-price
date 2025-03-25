import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logInfo } from '@loaprice/shared';
import { ControllerResponseInterceptor } from "./common/response/controller-response.interceptor";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalInterceptors(new ControllerResponseInterceptor())

    await app.listen(3000);
    logInfo('Server is running on http://localhost:3000');
}
bootstrap();
