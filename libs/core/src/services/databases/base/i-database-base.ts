import { ModelBase } from "@app/data/models/models/base/model-base/model-base";
import { IRepositoryBase } from "@app/data/repositories/base/repository-base/i-repository-base";
import { SortDocumentType } from "@app/data/types/sort-document.type";
import { DeleteResult, FilterQuery, HydratedDocument, Model, UpdateQuery, UpdateWriteOpResult } from "mongoose";

export interface IDatabaseBase<T extends ModelBase> {
    get instance(): Model<T>;
    get repository(): IRepositoryBase<T>;

    all(): Promise<HydratedDocument<T>[]>;
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