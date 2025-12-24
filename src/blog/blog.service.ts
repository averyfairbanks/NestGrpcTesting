import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  EntityNotFoundError,
  QueryDeepPartialEntity,
  Repository,
} from 'typeorm';
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogEntity } from './entities/blog.entity';
import { Blog, GetBlogRequest } from './interfaces/blog.interface';
import { UpdateBlogDto } from './dto/update-blog.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogEntity)
    private blogRepository: Repository<BlogEntity>,
  ) {}

  findAll() {
    return this.blogRepository.find();
  }

  async findOne(request: GetBlogRequest): Promise<BlogEntity> {
    const { id, title } = request;
    let lookupValue;
    if (id) {
      lookupValue = { id };
    } else if (title) {
      lookupValue = { title };
    } else {
      throw new BadRequestException(
        `Bad request for blog lookup ${JSON.stringify(request)}`,
      );
    }

    try {
      return await this.blogRepository.findOneByOrFail(lookupValue);
    } catch (err) {
      if (err instanceof EntityNotFoundError) {
        throw new NotFoundException(
          `No blog with found with ${JSON.stringify(lookupValue)}`,
        );
      }
      throw new InternalServerErrorException(err);
    }
  }

  create(createDto: CreateBlogDto) {
    return this.blogRepository.save(createDto);
  }

  update(updateDto: UpdateBlogDto) {
    return this.blogRepository.save(updateDto)
  }

  delete(entity: BlogEntity) {
    return this.blogRepository.remove(entity);
  }
}
