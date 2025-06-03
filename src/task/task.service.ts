import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from '../schemas/task.schema';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/createTask.dto';
import { GetTaskDto } from './dto/getTask.dto';
import { DeleteTaskByBelongsDto } from './dto/deleteTaskByBelongsDto';
import { DeleteTaskByNameDto } from './dto/deleteTaskByName';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async createTask(createTaskDto: CreateTaskDto) {
    try {
      const newTask = new this.taskModel(createTaskDto);
      return newTask.save();
    } catch (error) {
      console.error(error);
    }
  }

  async getTasks(getTaskDto: GetTaskDto) {
    try {
      return await this.taskModel.find(getTaskDto);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteTask(deleteTaskByNameDto: string) {
    try {
      const result = await this.taskModel
        .deleteOne({
          ['name']: deleteTaskByNameDto,
        })
        .exec();
      return result.deletedCount;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteTasks(deleteTaskByBelongsDto: string) {
    try {
      const result = await this.taskModel
        .deleteMany({
          belongs: deleteTaskByBelongsDto,
        })
        .exec();
      return result.deletedCount;
    } catch (error) {
      console.error(error);
    }
  }
}
