import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async create(@Body() createItemDto: CreateQuizDto) {
    return this.quizService.create(createItemDto);
  }

  @Get()
  async findAll() {
    return this.quizService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.quizService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateQuizDto) {
    return this.quizService.update(+id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizService.remove(+id);
  }
}
