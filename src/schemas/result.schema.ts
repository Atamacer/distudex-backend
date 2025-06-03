import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ timestamps: true, collection: 'Results' })
export class Result {
  @Prop({ required: true })
  readonly fullName: string;

  @Prop({ required: true })
  readonly serviceNumber: string;

  @Prop({ required: true })
  readonly points: number;

  @Prop({ required: true })
  readonly belongs: string;
}

export type ResultDocument = HydratedDocument<Result>;
export const ResultSchema = SchemaFactory.createForClass(Result);
