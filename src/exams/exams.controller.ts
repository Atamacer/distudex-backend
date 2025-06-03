import {
  Body,
  Controller,
  Delete,
  Get, HttpCode,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ExamsService } from './exams.service';
import { UpdateNameExamDto } from './dto/updateNameExam.dto';
import { CreateExamDto } from './dto/createExam.dto';
import { DeleteExamDto } from './dto/deleteExam.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('exams')
export class ExamsController {
  constructor(private examService: ExamsService) {}

  @UseGuards(AuthGuard('jwt'))
  @HttpCode(201)
  @Post('createExam')
  async createExam(@Body() examDto: CreateExamDto) {
    return this.examService.createExam(examDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @HttpCode(204)
  @Delete('deleteExam')
  async deleteExam(@Query() deleteExamDto: DeleteExamDto) {
    return this.examService.deleteExam(deleteExamDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @HttpCode(200)
  @Put('updateExam')
  async updateTitleExam(@Query() newTitle: UpdateNameExamDto) {
    return this.examService.updateExam(newTitle);
  }

  @HttpCode(200)
  @Get('getExams')
  async getNames() {
    return this.examService.getExams();
  }
}
