import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { POST, POST_INPUT } from './post.model';
import { PostService } from './post.service';

@Resolver(() => POST)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [POST])
  async getPostList() {
    return this.postService.getPostList();
  }

  @Mutation(() => POST)
  async createPost(@Args('post') post: POST_INPUT) {
    return this.postService.createPost(post);
  }

  @Mutation(() => POST)
  async deletePost(@Args('post') post: POST_INPUT) {
    return this.postService.deletePost(post);
  }
}
