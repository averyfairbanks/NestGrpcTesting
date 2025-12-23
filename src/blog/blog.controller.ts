import { Controller, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';

import { BlogService } from './blog.service';
import {
  BlogServiceControllerMethods,
  type Blog,
  type BlogServiceController,
  type FindOneByIdRequest,
} from './interfaces/blog.interface';

@Controller('blog')
@BlogServiceControllerMethods()
export class BlogController implements BlogServiceController {
  constructor(@Inject() private blogService: BlogService) {}

  findOneById(
    request: FindOneByIdRequest,
  ): Promise<Blog> | Observable<Blog> | Blog {
    return this.blogService.findOne(request.id);
  }
}
