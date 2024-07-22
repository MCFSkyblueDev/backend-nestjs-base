import { Quiz } from "../../quiz/entities/quiz.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
} from "typeorm";

@Entity("question")
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  content: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;

  constructor(item: Partial<Question>) {
    Object.assign(this, item);
  }
}
