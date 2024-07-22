import { Question } from "../../question/entities/question.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("quiz")
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "text",
  })
  name: string;

  @Column({ type: "bool", default: true })
  public: boolean;

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];

  constructor(item: Partial<Quiz>) {
    Object.assign(this, item);
  }
}
