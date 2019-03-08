import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn } from 'typeorm';

@Entity('userProfile')
export class UserProfile {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  
  @Column({ unique: true })
  display_name!: string;

  @Column({ length: 255 })
  short_bio!: string;

  @Column({ length: 255})
  thumbnail!: string;

  @Column('timestampz')
  @CreateDateColumn()
  created_at!: Date;
}
