import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module';
import { pgOptions } from './postgres/postgres.options';

@Module({
  imports: [TypeOrmModule.forRoot(pgOptions), BlogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
