import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from './blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogEntity)
    private blogRepository: Repository<BlogEntity>,
  ) {}
  
  findAll() {
    return `This action returns all blogs`;
  }

  findOne(id: number) {
    return `This action returns a #id blog`;
  }

  remove(id: number) {
    return `This action removes a #id blog`;
  }
}
