import { Controller, Post, Get, Body, Param, Request } from '@nestjs/common';
import { PostService } from './post.service';
import { POST } from './POST';

@Controller()
export class PostController {
  constructor(private service: PostService) {}

  @Get('get_fb_post_list')
  getFacebookPostList() {
    return this.service.getPostList();
  }

  @Post('create_fb_post')
  createFacebookPost(@Body() post: POST) {
    console.log(post);
    return this.service.createPost(post);
  }

  @Post('delete_fb_post')
  deleteFacebookPost(@Body() post: POST) {
    return this.service.deletePost(post);
  }
}
