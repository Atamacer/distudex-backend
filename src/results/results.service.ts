import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TaskService } from '../task/task.service';
import { Result, ResultDocument } from '../schemas/result.schema';
import { ResultDto } from './dto/result.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ResultsService {
  constructor(
    @InjectModel(Result.name) private resultModel: Model<ResultDocument>,
    private taskService: TaskService,
  ) {}

  async getResults() {
    return this.resultModel.find().sort({ createdAt: -1 }).limit(10).exec();
  }

  static correctPercentage(points: number, countAnswers: number): number {
    if (countAnswers <= 0) throw new Error('Invalid countAnswers');
    if (points < 0) throw new Error('Points value cannot be negative');
    return Number(((points / countAnswers) * 100).toFixed(2));
  }

  async addResult(resultDto: ResultDto) {
    const countAnswers: number | undefined =
      await this.taskService.getCountTaskByBelongs(resultDto.belongs);

    if (countAnswers === undefined || countAnswers <= 0) {
      throw new Error(`Invalid tasks count for belongs: ${resultDto.belongs}`);
    }

    if (resultDto.points < 0) {
      throw new Error('Points value cannot be negative');
    }

    const correctPercent = ResultsService.correctPercentage(resultDto.points, countAnswers);

    const newResult = new this.resultModel({
      ...resultDto,
      points: correctPercent,
    });

    return newResult.save();
  }
}
