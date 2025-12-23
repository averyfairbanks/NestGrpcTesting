import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Blog } from './interfaces/blog.interface';

@Entity({ name: 'blog' })
export class BlogEntity implements Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 128 })
  title: string;

  @Column({ type: 'varchar', length: 64 })
  author: string;

  @Column({ type: 'jsonb', default: {} })
  body: { [key: string]: any } | undefined;
}
