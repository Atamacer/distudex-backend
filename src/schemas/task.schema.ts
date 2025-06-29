import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true, collection: 'Tasks' })
export class Task {
  @Prop({ required: true, unique: false })
  belongs: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  correctAnswer: string;

  @Prop({ required: true, default: [], type: [String] })
  wrongAnswer: string[];
}

export type TaskDocument = HydratedDocument<Task>;
export const TaskSchema = SchemaFactory.createForClass(Task);
