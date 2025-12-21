import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { AppService } from './app.service';

@Module({
  imports: [BlogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
