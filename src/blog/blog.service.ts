import { UpsertBlogDto } from './dto/upsert-blog.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from './entities/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogEntity)
    private blogRepository: Repository<BlogEntity>,
  ) {}

  create(createDto: UpsertBlogDto) {
    return this.blogRepository.create(createDto);
  }

  findAll() {
    return this.blogRepository.find();
  }

  findOne(id: number): Promise<BlogEntity> {
    return this.blogRepository.findOneByOrFail({ id });
  }

  delete(id: number) {
    return this.blogRepository.delete({ id });
  }
}
