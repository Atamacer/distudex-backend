import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema';
import { TaskModule } from './task.module';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/createTask.dto';
import { GetTaskDto } from './dto/getTask.dto';
import { DeleteTaskByIdDto } from './dto/deleteTaskByIdDto';
import { DeleteTaskByNameDto } from './dto/deleteTaskByName';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskModule>) {}

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

  async deleteTask(deleteTaskByNameDto: DeleteTaskByIdDto) {
    try {
      const result = await this.taskModel
        .deleteOne({
          ['_id']: deleteTaskByNameDto,
        })
        .exec();
      return result.deletedCount;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteTasks(deleteTaskByNameDto: DeleteTaskByNameDto) {
    try {
      const result = await this.taskModel
        .deleteMany({
          ['name']: deleteTaskByNameDto,
        })
        .exec();
      return result.deletedCount;
    } catch (error) {
      console.error(error);
    }
  }
}
