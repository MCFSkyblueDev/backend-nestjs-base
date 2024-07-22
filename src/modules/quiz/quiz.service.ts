import { Injectable } from "@nestjs/common";
import { CreateQuizDto } from "./dto/create-quiz.dto";
import { UpdateQuizDto } from "./dto/update-quiz.dto";
import { EntityManager, Repository } from "typeorm";
import { Quiz } from "./entities/quiz.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class QuizService {
  constructor(
    private readonly entityManager: EntityManager,
    @InjectRepository(Quiz)
    private readonly itemsRepository: Repository<Quiz>,
  ) {}

  async create(createItemDto: CreateQuizDto) {
    const item = new Quiz(createItemDto);
    // await this.itemsRepository.save(item);
    await this.entityManager.save(item);
  }

  async findAll() {
    return this.itemsRepository.find({relations :["questions"]});
  }

  async findOne(id: number) {
    return this.itemsRepository.findOneBy({ id });
  }

  async update(id: number, updateItemDto: UpdateQuizDto) {
    const item = await this.itemsRepository.findOneBy({ id });
    item.public = updateItemDto.public;
    await this.entityManager.save(item);
  }

  async remove(id: number) {
    return this.itemsRepository.delete(id);
  }
}
