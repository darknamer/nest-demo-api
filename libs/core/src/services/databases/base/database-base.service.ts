import { IDatabaseBase } from './i-database-base';
import { ModelBase } from '@app/data/models/models/base/model-base/model-base';
import { DeleteResult, FilterQuery, HydratedDocument, UpdateQuery, UpdateWriteOpResult } from 'mongoose';
import { RepositoryBaseService } from '@app/data/repositories/base/repository-base/repository-base.service';
import { VALUE } from '@app/data/const/value';
import { SortDocumentType } from '@app/data/types/sort-document.type';

export abstract class DatabaseBaseService<T extends ModelBase> implements IDatabaseBase<T> {

    constructor(
        private readonly _repo: RepositoryBaseService<T>,
    ) { }

    get instnace() {
        return this._repo.instance;
    }
    get repository() {
        return this._repo;
    }

    all(): Promise<HydratedDocument<T>[]> {
        return this._repo.find({}, VALUE.QUERY_MAX, 0, { _id: -1 });
    }
    count(filter: FilterQuery<T>): Promise<number> {
        return this._repo.count(filter);
    }
    getById(id: any): Promise<HydratedDocument<T> | null> {
        return this._repo.getById(id);
    }
    findOne(filter: FilterQuery<T>): Promise<HydratedDocument<T> | null> {
        return this._repo.findOne(filter);
    }
    find(filter: FilterQuery<T>, limit: number = VALUE.QUERY_MAX, skip: number = 0, sort: SortDocumentType = { _id: -1 }): Promise<HydratedDocument<T>[]> {
        return this._repo.find(filter, limit, skip, sort);
    }

    insertOne(username: string, entity: HydratedDocument<T>): Promise<HydratedDocument<T>> {
        return this._repo.insertOne(username, entity);
    }
    insert(username: string, entities: HydratedDocument<T>[]): Promise<HydratedDocument<T>[]> {
        return this._repo.insert(username, entities);
    }

    updateOne(username: string, entity: HydratedDocument<T>): Promise<HydratedDocument<T>> {
        return this._repo.updateOne(username, entity);
    }
    update(username: string, entities: HydratedDocument<T>[]): Promise<HydratedDocument<T>[]> {
        return this._repo.update(username, entities);
    }
    updateMany(username: string, filter: FilterQuery<T>, update: UpdateQuery<T>): Promise<UpdateWriteOpResult> {
        return this._repo.updateMany(username, filter, update);
    }

    deleteOne(username: string, entity: HydratedDocument<T>): Promise<DeleteResult> {
        return this._repo.deleteOne(username, entity);
    }
    delete(username: string, entities: HydratedDocument<T>[]): Promise<DeleteResult> {
        return this._repo.delete(username, entities);
    }
    deleteMany(username: string, filter: FilterQuery<T>): Promise<DeleteResult> {
        return this._repo.deleteMany(username, filter);
    }
}
