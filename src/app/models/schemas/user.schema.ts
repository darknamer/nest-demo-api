import { SchemaFactory } from '@nestjs/mongoose';
import { User } from '../models/user/user';

export const UserSchema = SchemaFactory.createForClass(User);