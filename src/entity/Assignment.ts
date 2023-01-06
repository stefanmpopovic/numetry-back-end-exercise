import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { Game } from './Game';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  name!: string;

  @Column({ name: 'start_period' })
  startPeriod!: Date;

  @Column({ name: 'end_period' })
  endPeriod!: Date;

  @Column({ default: true })
  active!: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @ManyToMany(() => Game, (game) => game.assignments)
  @JoinTable()
  games!: Game[];
}