import { Types } from "mongoose";

export abstract class ModelBase {
    _id: Types.ObjectId;
    is_active: true;
    is_delete: true;
    created_at: Date;
    created_by: string;
    updated_at: Date | null;
    updated_by: string;
    deleted_at: Date | null;
    deleted_by: string;
}
