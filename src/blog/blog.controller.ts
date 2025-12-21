import { Controller, Inject, OnModuleInit } from "@nestjs/common";
import { type ClientGrpc } from "@nestjs/microservices";


interface BlogService {
}


@Controller('blog')
export class BlogController implements OnModuleInit {
    private blogService: BlogService;

    constructor(@Inject('BLOG_PACKAGE') private readonly client: ClientGrpc) {}

    onModuleInit() {
        this.blogService = this.client.getService<BlogService>('BlogService')
    }

}