import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany } from 'typeorm';
import { Assignment } from './Assignment';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  name!: string;

  @Column({ name: 'number_of_modes', nullable: true })
  numberOfModes!: number;

  @Column({ default: true })
  active!: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @ManyToMany(() => Assignment, (assignment) => assignment.games)
  assignments!: Assignment[];
}