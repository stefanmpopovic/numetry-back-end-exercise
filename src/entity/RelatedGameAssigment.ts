import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Assignment } from './Assignment';
import { Game } from './Game';

@Entity()
export class RelatedGameAssingment {
    
  @PrimaryColumn({ name: 'game_id' })
  public gameId!: number;

  @PrimaryColumn({ name: 'assignment_id' })
  public assignmentId!: number;

  @ManyToOne(
    (_type: Game) => Game,
    (game: Game) => game
  )
  @JoinColumn({ name: "game_id" })
  public game!: Game;

  @ManyToOne(
    (_type: Assignment) => Assignment,
    (assignment: Assignment) => assignment
  )
  @JoinColumn({ name: "assignment_id" })
  public assignment!: Assignment;
}