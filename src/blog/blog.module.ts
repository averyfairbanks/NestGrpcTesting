import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from 'src/grpc-client.options';
import { BLOG_PACKAGE_NAME } from './interfaces/blog.interface';
import { BlogController } from './blog.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: BLOG_PACKAGE_NAME,
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [BlogController],
})
export class BlogModule {}
