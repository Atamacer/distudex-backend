import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('tests')
export class TestsController {
  @Post('addTest')
  addTest() {
    return 1;
  }

  @Get('getTest')
  getTest() {
    return 1;
  }

  @Delete('deleteTest')
  deleteTest() {
    return 1;
  }

  @Put('updateTest')
  updateTest() {
    return 1;
  }

  @Post('addExercise')
  addExercise() {
    return 1;
  }

  @Delete('deleteExercise')
  deleteExercise() {
    return 1;
  }

  @Put('updateExercise')
  updateExercise() {
    return 1;
  }

  @Get('getExercise')
  getExercise() {
    return 1;
  }
}
