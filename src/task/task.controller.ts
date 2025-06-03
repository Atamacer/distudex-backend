import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/createTask.dto';
import { GetTaskDto } from './dto/getTask.dto';
import { DeleteTaskByNameDto } from './dto/deleteTaskByName';
import { DeleteTaskByBelongsDto } from './dto/deleteTaskByBelongsDto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post('createTask')
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }

  @Get('getTasks')
  async getTasks(@Query() getTasksDto: GetTaskDto) {
    return this.taskService.getTasks(getTasksDto);
  }

  @Delete('deleteTask')
  async deleteTask(@Query() deleteTaskByNameDto: DeleteTaskByNameDto) {
    return this.taskService.deleteTask(deleteTaskByNameDto.name);
  }

  @Delete('deleteTasks')
  async deleteTasks(@Query() deleteTaskByBelongsDto: DeleteTaskByBelongsDto) {
    return this.taskService.deleteTasks(deleteTaskByBelongsDto.belongs);
  }
}
