import { ModelBase } from "@app/data/models/models/base/model-base/model-base";
import { SortDocumentType } from "@app/data/types/sort-document.type";
import { DeleteResult, FilterQuery, HydratedDocument, Model, UpdateQuery, UpdateResult, UpdateWriteOpResult } from "mongoose";

export interface IRepositoryBase<T extends ModelBase> {
    get instance(): Model<T>;

    count(filter: FilterQuery<T>): Promise<number>;

    getById(id: any): Promise<HydratedDocument<T> | null>;
    findOne(filter: FilterQuery<T>): Promise<HydratedDocument<T> | null>;
    find(filter: FilterQuery<T>, limit: number, skip: number, sort: SortDocumentType): Promise<HydratedDocument<T>[]>;

    insertOne(username: string, entity: HydratedDocument<T>): Promise<HydratedDocument<T>>;
    insert(username: string, entities: HydratedDocument<T>[]): Promise<HydratedDocument<T>[]>;

    updateOne(username: string, entity: HydratedDocument<T>): Promise<HydratedDocument<T>>;
    update(username: string, entities: HydratedDocument<T>[]): Promise<HydratedDocument<T>[]>;
    updateMany(username: string, filter: FilterQuery<T>, update: UpdateQuery<T>): Promise<UpdateWriteOpResult>;

    deleteOne(username: string, entity: HydratedDocument<T>): Promise<DeleteResult>;
    delete(username: string, entities: HydratedDocument<T>[]): Promise<DeleteResult>;
    deleteMany(username: string, filter: FilterQuery<T>): Promise<DeleteResult>;
}