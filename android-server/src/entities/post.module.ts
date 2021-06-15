import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './post.service';
import { POST } from './post.model';
import { PostResolver } from './post.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([POST])],
  providers: [PostService, PostResolver],
})

export class PostModule { }