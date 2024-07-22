import { Injectable } from "@nestjs/common";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { UpdateQuestionDto } from "./dto/update-question.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Question } from "./entities/question.entity";
import { Repository } from "typeorm";
import { Quiz } from "../quiz/entities/quiz.entity";

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    try {
      const quiz = await this.quizRepository.findOne({
        where: { id: createQuestionDto.quizId },
        relations: ["questions"],
      });
      if (!quiz) {
        throw new Error("Quiz not found");
      }
      const questionCreate = new Question(createQuestionDto);
      const newQuestion: Question =
        await this.questionRepository.save(questionCreate);
      quiz.questions.push(newQuestion);
      this.quizRepository.save(quiz);
      return newQuestion;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    return await this.questionRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
