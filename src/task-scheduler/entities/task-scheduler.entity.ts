import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class TaskScheduler {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  seconds: number;
}
