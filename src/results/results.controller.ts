import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ResultsService } from './results.service';
import { ResultDto } from './dto/result.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('results')
export class ResultsController {
  constructor(private resultService: ResultsService) {}

  @UseGuards(AuthGuard('jwt'))
  @HttpCode(200)
  @Get('getResults')
  async getResults() {
    return this.resultService.getResults();
  }

  @UseGuards(AuthGuard('jwt'))
  @HttpCode(201)
  @Post('addResult')
  async addResult(@Body() resultDto: ResultDto) {
    return this.resultService.addResult(resultDto);
  }
}
