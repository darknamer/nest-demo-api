import { Injectable } from '@nestjs/common';
import { RepositoryBaseService } from '../../base/repository-base/repository-base.service';
import { User } from '@app/data/models/models/user/user';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserRepositoryService extends RepositoryBaseService<User> {

    constructor(
        @InjectModel(User.name) private readonly model: Model<User>,
    ) {
        super(model);
    }
}
