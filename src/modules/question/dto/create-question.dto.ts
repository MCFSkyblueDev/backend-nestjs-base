import { IsEmpty, IsNumber } from "class-validator";

export class CreateQuestionDto {
  @IsEmpty()
  content: string;

  @IsEmpty()
  @IsNumber()
  quizId: number;
}
