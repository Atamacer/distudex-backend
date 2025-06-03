import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exam, ExamDocument } from '../schemas/exam.schema';
import { UpdateNameExamDto } from './dto/updateNameExam.dto';
import { DeleteExamDto } from './dto/deleteExam.dto';
import { CreateExamDto } from './dto/createExam.dto';
import { TaskService } from '../task/task.service';

@Injectable()
export class ExamsService {
  constructor(
    @InjectModel(Exam.name) private examModel: Model<ExamDocument>,
    private taskService: TaskService,
  ) {}

  async createExam(examDto: CreateExamDto) {
    try {
      const newExam = new this.examModel({ ...examDto });
      return await newExam.save();
    } catch (error) {
      console.error(error);
    }
  }

  async updateExam(titleExamDto: UpdateNameExamDto) {
    try {
      return await this.examModel.updateOne(
        { name: titleExamDto.oldName },
        { name: titleExamDto.newName },
      );
    } catch (error) {
      console.error(error);
    }
  }

  async deleteExam(deleteExamDto: DeleteExamDto) {
    try {
      await this.taskService.deleteTasks(deleteExamDto.name);
      return await this.examModel.deleteOne(deleteExamDto);
    } catch (error) {
      console.error(error);
    }
  }

  async getExams() {
    try {
      return await this.examModel.distinct('name').exec();
    } catch (error) {
      console.error(error);
    }
  }
}
