import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    await app.listen(8081, () => {
        // Logger.log
        Logger.log(`Serve on http://127.0.0.1:8081`);
        process.send && process.send('ready');
    });
}
bootstrap();

process.on('SIGINT', function () {
    setTimeout(() => {
        process.exit(0);
    }, 300);
});
