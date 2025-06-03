import { Module } from '@nestjs/common';
import { ExamsController } from './exams.controller';
import { ExamsService } from './exams.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Exam, ExamSchema } from '../schemas/exam.schema';
import { TaskModule } from '../task/task.module';

@Module({
  controllers: [ExamsController],
  providers: [ExamsService],
  imports: [
    TaskModule,
    MongooseModule.forFeature([{ name: Exam.name, schema: ExamSchema }]),
  ],
})
export class ExamsModule {}
