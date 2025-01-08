import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // create app by factory
  const app = await NestFactory.create(AppModule);

  // add validators
  app.useGlobalPipes(new ValidationPipe());

  // add swagger
  const config = new DocumentBuilder()
    .setTitle('Demo api')
    .setDescription('The DEMO API description')
    .setVersion('1.0.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);
  
  // run expressjs
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
