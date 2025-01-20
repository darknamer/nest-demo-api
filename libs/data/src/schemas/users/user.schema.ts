import { User } from "@app/data/models/models/user/user";
import { HydratedDocument, Schema } from "mongoose";

export type UserDocument = HydratedDocument<User>;

export const UserSchema = new Schema({
    username: { type: String, required: true, unique: true, index: true },
    first_name: { type: String, required: true, index: true },
    last_name: { type: String, required: true, index: true },
    email_address: { type: String, required: true, unique: true, index: true },
    birthday: { type: Date, required: true, index: true },

    is_active: { type: Boolean, required: true, default: true, index: true },
    is_delete: { type: Boolean, required: true, default: true, index: true },
    created_at: { type: Date, required: true, default: Date.now, index: true },
    created_by: { type: String, required: false, default: '', index: true },
    updated_at: { type: Date, required: false, default: null },
    updated_by: { type: String, required: false, default: '' },
    deleted_at: { type: Date, required: false, default: null },
    deleted_by: { type: String, required: false, default: '' },
});