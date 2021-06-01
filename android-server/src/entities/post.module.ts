import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { POST } from './POST';

@Module({
  imports: [TypeOrmModule.forFeature([POST])],
  providers: [PostService],
  controllers: [PostController],
})

export class PostModule { }