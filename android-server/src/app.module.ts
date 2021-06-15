import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { POST } from './entities/post.model';
import { PostModule } from './entities/post.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'max30201',
      database: 'post_data',
      entities: [POST],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/post_schema.gql'),
    }),
    PostModule,
  ],
})
export class AppModule {}
