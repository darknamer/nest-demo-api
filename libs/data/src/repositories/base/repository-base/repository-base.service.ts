import { Injectable } from '@nestjs/common';
import { IRepositoryBase } from './i-repository-base';
import { ModelBase } from '@app/data/models/models/base/model-base/model-base';
import { FilterQuery, IfAny, Document, Default__v, Require_id, UpdateQuery, UpdateResult, DeleteResult, Types, Schema, Model, HydratedDocument } from 'mongoose';

@Injectable()
export abstract class RepositoryBaseService<T extends ModelBase> implements IRepositoryBase<T> {

    constructor(
        private readonly _model: Model<T>,
    ) {}

    get instance(): Model<T> {
        return this._model;
    }

    count(filter: FilterQuery<T>): Promise<number> {
        return this._model.countDocuments(filter).exec();
    }
    findOne(filter: FilterQuery<T>): Promise<HydratedDocument<T>> {
        return this._model.findOne(filter).exec();
    }
    find(filter: FilterQuery<T>, limit: number, skip: number): Promise<HydratedDocument<T>[]> {
        return this._model.find(filter).sort().skip(skip).limit(limit).exec();
    }
    insertOne(username: string, entity: HydratedDocument<T>): Promise<HydratedDocument<T>> {
        throw new Error('Method not implemented.');
    }
    insert(username: string, entity: HydratedDocument<T>[]): Promise<HydratedDocument<T>> {
        throw new Error('Method not implemented.');
    }
    updateOne(username: string, entity: HydratedDocument<T>): Promise<HydratedDocument<T>> {
        throw new Error('Method not implemented.');
    }
    update(username: string, entities: HydratedDocument<T>[]): Promise<HydratedDocument<T>[]> {
        throw new Error('Method not implemented.');
    }
    updateMany(filter: FilterQuery<T>, update: UpdateQuery<T>): Promise<UpdateResult> {
        throw new Error('Method not implemented.');
    }
    deleteOne(username: string, entity: HydratedDocument<T>): Promise<DeleteResult> {
        throw new Error('Method not implemented.');
    }
    delete(username: string, entities: HydratedDocument<T>[]): Promise<DeleteResult> {
        throw new Error('Method not implemented.');
    }
    deleteMany(username: string, filter: FilterQuery<T>): Promise<DeleteResult> {
        throw new Error('Method not implemented.');
    }
}
