import { Module } from '@nestjs/common';
import { ExamsController } from './exams.controller';
import { ExamsService } from './exams.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Exam, ExamSchema } from '../schemas/exam.schema';

@Module({
  controllers: [ExamsController],
  providers: [ExamsService],
  imports: [
    MongooseModule.forFeature([{ name: Exam.name, schema: ExamSchema }]),
  ],
})
export class ExamsModule {}
