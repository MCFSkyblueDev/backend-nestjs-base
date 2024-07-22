import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database/database.module";
import { QuizModule } from "./modules/quiz/quiz.module";
import { QuestionModule } from './modules/question/question.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    QuizModule,
    QuestionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
