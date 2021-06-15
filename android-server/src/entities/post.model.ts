import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@ObjectType()
@Entity()
export class POST extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  author: string;

  @Field()
  @Column()
  photo: string;

  @Field()
  @Column()
  timestamp: number;

  @Field()
  @Column()
  content: string;

  @Field()
  @Column()
  image_content: string;
}

@InputType()
export class POST_INPUT {
  @Field()
  author: string;

  @Field()
  photo: string;

  @Field()
  timestamp: number;

  @Field()
  content: string;

  @Field()
  image_content: string;
}
