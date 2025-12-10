import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('scenes')
export class Scene {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column('text', { array: true })
  message_sequence: string[];

  @Column('text', { array: true })
  question: string[];

  @Column('jsonb', { nullable: true })
  call_to_action_sequence: any[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}