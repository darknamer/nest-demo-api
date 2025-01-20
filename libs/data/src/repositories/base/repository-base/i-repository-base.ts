import { ModelBase } from "@app/data/models/models/base/model-base/model-base";
import { DeleteResult, FilterQuery, HydratedDocument, Model, UpdateQuery, UpdateResult } from "mongoose";

export interface IRepositoryBase<T extends ModelBase> {
    get instance(): Model<T>;
     
    count(filter: FilterQuery<T>): Promise<number>;

    findOne(filter: FilterQuery<T>): Promise<HydratedDocument<T> | null>;
    find(filter: FilterQuery<T>, limit: number, skip: number): Promise<HydratedDocument<T>[]>;

    insertOne(username: string, entity: HydratedDocument<T>): Promise<HydratedDocument<T>>;
    insert(username: string, entity: HydratedDocument<T>[]): Promise<HydratedDocument<T>>;

    updateOne(username: string, entity: HydratedDocument<T>): Promise<HydratedDocument<T>>;
    update(username: string, entities: HydratedDocument<T>[]): Promise<HydratedDocument<T>[]>;
    updateMany(filter: FilterQuery<T>, update: UpdateQuery<T>): Promise<UpdateResult>;

    deleteOne(username: string, entity: HydratedDocument<T>): Promise<DeleteResult>;
    delete(username: string, entities: HydratedDocument<T>[]): Promise<DeleteResult>;
    deleteMany(username: string, filter: FilterQuery<T>): Promise<DeleteResult>;
}