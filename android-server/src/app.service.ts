import { Injectable } from '@nestjs/common';
import { range } from 'rxjs';

declare namespace postdata {
  export interface Post {
    author: string;
    photo: string;
    timestamp: number;
    content: string;
    image_content: string;
  }

  export interface Data {
    posts: Post[];
  }

  export interface RootObject {
    status: number;
    data: Data;
  }
}

class jsonData implements postdata.RootObject {
  status: number;
  data: postdata.Data;

  constructor() {
    this.status = 0;
    this.data = {
      posts: [],
    };
  }

  addpost(
    author: string,
    photo: string,
    timestamp: number,
    content: string,
    image_content: string,
  ): void {
    this.data.posts.push({
      author: author,
      photo: photo,
      timestamp: timestamp,
      content: content,
      image_content: image_content,
    });
  }
}

@Injectable()
export class AppService {
  getHello(): string {
    const jsonObject = new jsonData();
    jsonObject.addpost(
      'Jim',
      'https://imgur.com/dXL2o6k',
      1619523061,
      '最近澱粉減量改吃蛋白質，結果膽固醇就過高了耶\uD83D\uDE11\uD83D\uDE11\uD83D\uDE11\uD83D\uDE44\n人生好難...\uD83C\uDF43',
      'https://imgur.com/dBX3PCR',
    );
    for (var i = 0; i < 30; i++) {
      jsonObject.addpost(
        'Jim',
        'https://imgur.com/dXL2o6k',
        1619523061,
        String(i),
        'https://imgur.com/dBX3PCR',
      );
    }
    return JSON.stringify(jsonObject);
  }
}
