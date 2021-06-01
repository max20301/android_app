import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { POST } from './entities/POST';

@Controller()
export class AppController {
  
  constructor(private service: AppService) { }

    @Get('/get_fb_post_list')
    getFacebookPostList() {
        return this.service.getPostList();
    }

    @Post('/create_fb_post')
    createFacebookPost(post: POST) {
        return this.service.createPost(post);
    }

    @Post('/delete_fb_post')
    deleteFacebookPost(post: POST) {
        return this.service.deletePost(post);
    }
}
