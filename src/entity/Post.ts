import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import User from './User';

@Entity('posts')
export default class Post {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 255 })
  title!: string;

  @Column('text')
  body!: string;

  @Column({ length: 255, nullable: true })
  thumbnail!: string;

  @Column()
  is_markdown!: boolean;

  @Column()
  is_temp!: boolean;

  @ManyToOne(type => User, { cascade: true })
  @JoinColumn({ name: 'fk_user_id' })
  user!: User;

  @Column('uuid')
  fk_user_id!: string;

  @Index()
  @Column({ length: 255 })
  url_slug!: string;

  @Index()
  @Column()
  likes!: number;

  
}