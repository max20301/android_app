import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { POST } from './entities/POST';
import { PostModule } from './entities/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'max30201',
      database: 'post_data',
      entities: [POST]
    }),
    PostModule,
  ],
})
export class AppModule {}
