import { User } from "../models/user/user";
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;