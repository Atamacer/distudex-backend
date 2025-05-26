import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  patronymic: string;

  @Prop({ required: true })
  serviceNumber: string;

  @Prop({ required: true })
  role: string;

  @Prop({})
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
