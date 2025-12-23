import { Controller, Inject, UseFilters } from '@nestjs/common';
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
import { Empty } from './interfaces/google/protobuf/empty.interface';
import  {HttpToRpcExceptionFilter}  from 'src/filters/http-to-rpc-exception.filter';

@Controller('blog')
@BlogServiceControllerMethods()
@UseFilters(HttpToRpcExceptionFilter.getInstance())
export class BlogController implements BlogServiceController {
  constructor(@Inject() private blogService: BlogService) {}

  findAll(_: Empty): Promise<FindAllBlogsResponse> {
    return this.blogService.findAll().then((blogs) => {
      return { blogs };
    });
  }

  findOneById(request: FindOneByIdRequest): Promise<Blog> {
    return this.blogService.findOne(request.id);
  }
}
