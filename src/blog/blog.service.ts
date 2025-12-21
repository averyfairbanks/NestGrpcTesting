// ...
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { FindOneByIdRequest, Blog, BlogServiceController, BlogServiceClient, BLOG_SERVICE_NAME, BLOG_PACKAGE_NAME } from './interfaces/blog';
import { Observable } from 'rxjs';
import { type ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit {
  private heroesService: BlogServiceClient;

  constructor(@Inject(BLOG_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit(): void {
    this.heroesService = this.client.getService<BlogServiceClient>(BLOG_SERVICE_NAME);
  }

  findOneById(request: FindOneByIdRequest): Observable<Blog> {
    return this.heroesService.findOneById(request);
  }
}