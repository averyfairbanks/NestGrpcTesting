import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { UpsertBlogDto } from './dto/upsert-blog.dto';
import { BlogEntity } from './entities/blog.entity';

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

  async findOne(id: number): Promise<BlogEntity> {
    try {
      const blog = await this.blogRepository.findOneBy({ id });
      if (!blog) {
        throw new NotFoundException(`No blog with id: ${id} found`);
      }

      return blog;
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  delete(id: number) {
    return this.blogRepository.delete({ id });
  }
}
