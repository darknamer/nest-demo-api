import { IRepositoryBase } from './i-repository-base';
import { ModelBase } from '@app/data/models/models/base/model-base/model-base';
import { FilterQuery, UpdateQuery, DeleteResult, Model, HydratedDocument, UpdateWriteOpResult } from 'mongoose';
import { SortDocumentType } from '@app/data/types/sort-document.type';

export abstract class RepositoryBaseService<T extends ModelBase> implements IRepositoryBase<T> {

    constructor(
        private readonly _model: Model<T>,
    ) { }

    get instance(): Model<T> {
        return this._model;
    }

    count(filter: FilterQuery<T>): Promise<number> {
        return this._model.countDocuments(filter).exec();
    }
    getById(id: any): Promise<HydratedDocument<T> | null> {
        return this._model.findById(id).exec();
    }
    findOne(filter: FilterQuery<T>): Promise<HydratedDocument<T>> {
        return this._model.findOne(filter).exec();
    }
    find(filter: FilterQuery<T>, limit: number, skip: number, sort: SortDocumentType): Promise<HydratedDocument<T>[]> {
        return this._model.find(filter).sort(sort).skip(skip).limit(limit).exec();
    }
    insertOne(username: string, entity: HydratedDocument<T>): Promise<HydratedDocument<T>> {
        entity.created_at = new Date();
        entity.created_by = username;
        return this._model.create(entity);
    }
    insert(username: string, entities: HydratedDocument<T>[]): Promise<HydratedDocument<T>[]> {
        for (let i = 0; i < entities.length; i++) {
            entities[i].created_at = new Date();
            entities[i].created_by = username;
        }
        return this._model.create(entities);
    }
    updateOne(username: string, entity: HydratedDocument<T>): Promise<HydratedDocument<T>> {
        entity.updated_at = new Date();
        entity.updated_by = username;
        return entity.updateOne().exec();
    }
    update(username: string, entities: HydratedDocument<T>[]): Promise<HydratedDocument<T>[]> {
        throw new Error('Method not implemented.');
    }
    updateMany(username: string, filter: FilterQuery<T>, update: UpdateQuery<T>): Promise<UpdateWriteOpResult> {
        if (!update.$set) {
            update.$set = {
                updated_at: new Date(),
                updated_by: username,
            };
        } else {
            update.$set.updated_at = new Date();
            update.$set.updated_by = username;
        }

        return this._model.updateMany(filter, update).exec();
    }
    deleteOne(username: string, entity: HydratedDocument<T>): Promise<DeleteResult> {
        return entity.deleteOne().exec();
    }
    delete(username: string, entities: HydratedDocument<T>[]): Promise<DeleteResult> {
        const filter: FilterQuery<T> = {
            in: { $in: entities.map(x => x._id) },
        };
        return this.deleteMany(username, filter);
    }
    deleteMany(username: string, filter: FilterQuery<T>): Promise<DeleteResult> {
        return this._model.deleteMany(filter).exec();
    }
}
