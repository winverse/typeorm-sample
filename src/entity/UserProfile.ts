import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import User from './User';

@Entity('userProfile')
export default class UserProfile {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  
  @Column({ unique: true })
  display_name!: string;

  @Column({ length: 255 })
  short_bio!: string;

  @Column({ length: 255 })
  thumbnail!: string;

  @Column('timestampz')
  @CreateDateColumn()
  created_at!: Date;

  @Column('timestamptz')
  @UpdateDateColumn()
  updated_at!: Date;
  
  @OneToOne(type => User, { cascade: true })
  @JoinColumn({ name: 'fk_user_id' })
  user!: User;

  @Column('uuid')
  fk_user_id!: string;

  @Column({
    default: {},
    type: 'jsonb'
  })
  profile_links!: any;

  @Column('text')
  about!: string;
}
