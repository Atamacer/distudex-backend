import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exam, ExamDocument } from '../schemas/exam.schema';
import { DeleteExamDto } from './dto/createExam.dto';
import { UpdateNameExamDto } from './dto/updateNameExam.dto';

@Injectable()
export class ExamsService {
  constructor(@InjectModel(Exam.name) private examModel: Model<ExamDocument>) {}

  async createExam(examDto: DeleteExamDto) {
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
      const newExam = new this.examModel({ ...deleteExamDto });
      return await newExam.save();
    } catch (error) {
      console.error(error);
    }
  }
}
