import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const pgOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'sbs'
};