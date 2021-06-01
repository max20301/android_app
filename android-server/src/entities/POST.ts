import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class POST extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  author: string;

  @Column()
  photo: string;

  @Column()
  timestamp: number;

  @Column()
  content: string;

  @Column()
  image_content: string;

  constructor(
    author: string,
    photo: string,
    timestamp: number,
    content: string,
    image_content: string,
  ) {
    super();
    this.author = author;
    this.photo = photo;
    this.timestamp = timestamp;
    this.content = content;
    this.image_content = image_content;
  }
}
