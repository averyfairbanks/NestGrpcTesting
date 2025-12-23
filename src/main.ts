import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { grpcClientOptions } from './grpc/grpc-client.options';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    grpcClientOptions,
  );

  app.useLogger(['log', 'error']); // TODO: disable as needed
  await app.listen();
}
bootstrap();
