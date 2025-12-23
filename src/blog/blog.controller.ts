import { Controller, Inject } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { status } from '@grpc/grpc-js';

import { BlogService } from './blog.service';
import {
  BlogServiceControllerMethods,
  FindAllBlogsResponse,
  type Blog,
  type BlogServiceController,
  type FindOneByIdRequest,
} from './interfaces/blog.interface';
import { RpcException } from '@nestjs/microservices';
import { Empty } from './interfaces/google/protobuf/empty.interface';

@Controller('blog')
@BlogServiceControllerMethods()
export class BlogController implements BlogServiceController {
  constructor(@Inject() private blogService: BlogService) {}

  findAll(
    _: Empty,
  ):
    | Promise<FindAllBlogsResponse>
    | Observable<FindAllBlogsResponse>
    | FindAllBlogsResponse {
    return this.blogService
      .findAll()
      .then((blogs) => {
        return { blogs };
      })
      .catch((err) => {
        throw new RpcException({
          code: status.NOT_FOUND,
          message: err?.message,
        });
      });
  }

  findOneById(
    request: FindOneByIdRequest,
  ): Promise<Blog> | Observable<Blog> | Blog {
    return this.blogService.findOne(request.id).catch((err) => {
      throw new RpcException({
        code: status.NOT_FOUND,
        message: err?.message || "Couldn't find entity.",
      });
    });
  }
}
