import { Controller, Delete, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post('createTask')
  async createTask() {
    return 1;
  }

  @Get('getTasks')
  async getTasks() {
    return 1;
  }

  @Delete('deleteTask')
  async deleteTask() {
    return 1;
  }

  @Delete('deleteTasks')
  async deleteTasks() {
    return 1;
  }
}
