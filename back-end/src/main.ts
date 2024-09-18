import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:8081', // Permitir requisições deste domínio
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    credentials: true, // Permitir envio de cookies, se necessário
  });
  await app.listen(3000);
}
bootstrap();
