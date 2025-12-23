import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BlogEntity } from 'src/blog/blog.entity';

export const pgOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'sbs',
  synchronize: true, // TODO: make this a .env var for only localdev (or until that doesn't make sense)
  entities: [BlogEntity],
};
