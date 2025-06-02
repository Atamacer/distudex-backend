import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ExamsService } from './exams.service';
import { UpdateNameExamDto } from './dto/updateNameExam.dto';
import { CreateExamDto } from './dto/createExam.dto';
import { DeleteExamDto } from './dto/deleteExam.dto';

@Controller('exams')
export class ExamsController {
  constructor(private examService: ExamsService) {}

  @Post('createExam')
  async createExam(@Body() examDto: CreateExamDto) {
    return this.examService.createExam(examDto);
  }

  @Delete('deleteExam')
  async deleteExam(@Query() deleteExamDto: DeleteExamDto) {
    return this.examService.deleteExam(deleteExamDto);
  }

  @Put('updateExam')
  async updateTitleExam(@Query() newTitle: UpdateNameExamDto) {
    return this.examService.updateExam(newTitle);
  }

  @Get('getExams')
  async getNames() {
    return this.examService.getExams();
  }
}
