// ...
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { FindOneByIdRequest, Blog, BlogServiceClient, BLOG_SERVICE_NAME, BLOG_PACKAGE_NAME } from './blog/interfaces/blog';
import { Observable } from 'rxjs';
import { type ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit {
  private blogService: BlogServiceClient;

  constructor(@Inject(BLOG_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit(): void {
    this.blogService = this.client.getService<BlogServiceClient>(BLOG_SERVICE_NAME);
  }

  findOneById(request: FindOneByIdRequest): Observable<Blog> {
    return this.blogService.findOneById(request);
  }
}