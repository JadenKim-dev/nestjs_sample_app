import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Nest Sample API')
    .setDescription('API 문서입니다.')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
