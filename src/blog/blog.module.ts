import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from 'src/grpc/grpc-client.options';
import { BLOG_PACKAGE_NAME } from './interfaces/blog.interface';
import { BlogController } from './blog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './blog.entity';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: BLOG_PACKAGE_NAME,
        ...grpcClientOptions,
      },
    ]),
    TypeOrmModule.forFeature([BlogEntity]),
  ],
  controllers: [BlogController],
})
export class BlogModule {}
