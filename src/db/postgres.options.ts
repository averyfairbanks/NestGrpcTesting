import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BlogEntity } from 'src/blog/blog.entity';
import { Migrations1766520355148 as InitMigration } from './migrations/1766520355148-migrations';

export const pgOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'sbs',
  schema: 'public',
  synchronize: false,
  entities: [BlogEntity],
  migrations: [InitMigration],
  migrationsRun: true,
  logging: 'all',
};
