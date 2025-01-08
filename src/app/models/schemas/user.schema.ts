import { maxLength } from "class-validator";
import { Schema } from "mongoose";

export const UserSchema = new Schema({
    username: { type: String, required: true, unique: true, index: true, maxlength: 255 },
    first_name: { type: String, required: true, index: true },
    last_name: { type: String, required: true, index: true },
    email_address: { type: String, required: true, unique: true, index: true, maxlength: 255 },
    birthday: { type: Date, required: true, index: true },
});