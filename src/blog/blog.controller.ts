import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { GrpcMethod, type ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { Metadata, type ServerUnaryCall } from '@grpc/grpc-js';
import {
  BlogServiceControllerMethods,
  type Blog,
  type BlogServiceController,
  type FindOneByIdRequest,
} from './interfaces/blog';

@Controller('blog')
@BlogServiceControllerMethods()
export class BlogController implements BlogServiceController {
  findOneById(
    request: FindOneByIdRequest,
  ): Promise<Blog> | Observable<Blog> | Blog {
    return { id: 1, title: 'test', author: 'me', body: 'body' };
  }
}
