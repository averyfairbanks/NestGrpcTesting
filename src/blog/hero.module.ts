import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from 'src/grpc-client.options';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BLOG_PACKAGE',
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [],
})
export class BlogModule {}
