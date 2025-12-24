import { Controller, Inject, UseFilters } from '@nestjs/common';

import { HttpToRpcExceptionFilter } from 'src/filters/http-to-rpc-exception.filter';
import { BlogService } from './blog.service';
import {
  BlogServiceControllerMethods,
  CreateRequest,
  GetBlogRequest,
  ListBlogsResponse,
  UpdateRequest,
  type Blog,
  type BlogServiceController,
} from './interfaces/blog.interface';
import { Empty } from './interfaces/google/protobuf/empty.interface';

@Controller('blog')
@BlogServiceControllerMethods()
@UseFilters(HttpToRpcExceptionFilter.getInstance())
export class BlogController implements BlogServiceController {
  constructor(@Inject() private blogService: BlogService) {}

  getBlog(request: GetBlogRequest): Promise<Blog> {
    return this.blogService.findOne(request);
  }

  listBlogs(_: Empty): Promise<ListBlogsResponse> {
    return this.blogService.findAll().then((blogs) => {
      return { blogs };
    });
  }

  create(request: CreateRequest): Promise<Blog> {
    return this.blogService.create(request);
  }

  update(request: UpdateRequest): Promise<Blog> {
    return this.blogService.update(request);
  }
}
