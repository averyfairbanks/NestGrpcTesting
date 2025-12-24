import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { BlogEntity } from './entities/blog.entity';
import { GetBlogRequest } from './interfaces/blog.interface';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogEntity)
    private blogRepository: Repository<BlogEntity>,
  ) {}

  findAll() {
    // TODO: pagination/search/sort/filter/etc
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
    // TODO: exception handling
    return this.blogRepository.save(createDto);
  }

  update(updateDto: UpdateBlogDto) {
    // TODO: exception handling
    return this.blogRepository.save(updateDto);
  }

  delete(entity: BlogEntity) {
    // TODO: exception handling
    return this.blogRepository.remove(entity);
  }
}
