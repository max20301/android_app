import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { POST, POST_INPUT } from './post.model';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(POST) private postRepository: Repository<POST>,
  ) {}

  async getPostList() {
    return await this.postRepository.find({});
  }

  async createPost(post: POST_INPUT) {
    let object = new POST()
    object.author = post.author
    object.photo = post.photo
    object.timestamp = post.timestamp
    object.image_content = post.image_content
    object.content = post.content
    await this.postRepository.save(object);
    return object
  }

  async deletePost(post: POST_INPUT) {
    let object = new POST()
    object.author = post.author
    object.photo = post.photo
    object.timestamp = post.timestamp
    object.image_content = post.image_content
    object.content = post.content
    await this.postRepository.delete(object);
    return object
  }
}
