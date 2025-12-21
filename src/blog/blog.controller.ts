import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';

import {
  BlogServiceControllerMethods,
  type Blog,
  type BlogServiceController,
  type FindOneByIdRequest,
} from './interfaces/blog.interface';

@Controller('blog')
@BlogServiceControllerMethods()
export class BlogController implements BlogServiceController {
  findOneById(
    request: FindOneByIdRequest,
  ): Promise<Blog> | Observable<Blog> | Blog {
    return { id: 1, title: 'test', author: 'me', body: 'body' };
  }
}
