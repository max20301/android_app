import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { POST } from './POST';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(POST) private postRepository: Repository<POST>,
  ) {}

  async getPostList() {
    return await this.postRepository.find({});
  }

  async createPost(post: POST) {
    await this.postRepository.save(post);
  }

  async deletePost(post: POST) {
    await this.postRepository.delete(post);
  }
}
