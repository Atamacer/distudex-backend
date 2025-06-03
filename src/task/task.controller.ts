import {
  Body,
  Controller,
  Delete,
  Get, HttpCode,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/createTask.dto';
import { GetTaskDto } from './dto/getTask.dto';
import { DeleteTaskByNameDto } from './dto/deleteTaskByName';
import { DeleteTaskByBelongsDto } from './dto/deleteTaskByBelongsDto';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @UseGuards(AuthGuard('jwt'))
  @HttpCode(201)
  @Post('createTask')
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }

  @Get('getTasks')
  @HttpCode(200)
  async getTask(@Query() getTaskDto: GetTaskDto) {
    return this.taskService.getTask(getTaskDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @HttpCode(204)
  @Delete('deleteTask')
  async deleteTask(@Query() deleteTaskByNameDto: DeleteTaskByNameDto) {
    return this.taskService.deleteTask(deleteTaskByNameDto.name);
  }

  @UseGuards(AuthGuard('jwt'))
  @HttpCode(204)
  @Delete('deleteTasks')
  async deleteTasks(@Query() deleteTaskByBelongsDto: DeleteTaskByBelongsDto) {
    return this.taskService.deleteTasks(deleteTaskByBelongsDto.belongs);
  }
}
