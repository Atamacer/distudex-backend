import { Body, Controller, Delete, Post, Put } from '@nestjs/common';
import { DeleteExamDto } from './dto/createExam.dto';
import { ExamsService } from './exams.service';
import { UpdateNameExamDto } from './dto/updateNameExam.dto';

@Controller('exams')
export class ExamsController {
  constructor(private examService: ExamsService) {}

  @Post('createExam')
  createExam(@Body() examDto: DeleteExamDto) {
    return this.examService.createExam(examDto);
  }

  @Delete('deleteExam')
  deleteExam(@Body() deleteExamDto: DeleteExamDto) {
    return this.examService.deleteExam(deleteExamDto);
  }

  @Put('updateExam')
  updateTitleExam(@Body() newTitle: UpdateNameExamDto) {
    return this.examService.updateExam(newTitle);
  }
}
