import { OmitType } from '@nestjs/swagger';
import { BlogEntity } from '../entities/blog.entity';

// translation: BlogEntity minus id, which is generated on Create
export class UpsertBlogDto extends OmitType(BlogEntity, ['id'] as const) {}
