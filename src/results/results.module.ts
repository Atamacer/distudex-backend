import { Module } from '@nestjs/common';
import { ResultsService } from './results.service';
import { ResultsController } from './results.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from '../task/task.module';
import { Result, ResultSchema } from '../schemas/result.schema';

@Module({
  providers: [ResultsService],
  controllers: [ResultsController],
  imports: [
    TaskModule,
    MongooseModule.forFeature([{ name: Result.name, schema: ResultSchema }]),
  ],
})
export class ResultsModule {}
