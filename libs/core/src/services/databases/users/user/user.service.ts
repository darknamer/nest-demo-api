import { Injectable } from '@nestjs/common';
import { DatabaseBaseService } from '../../base/database-base.service';
import { User } from '@app/data/models/models/user/user';
import { UserRepositoryService } from '@app/data/repositories/users/user-repository/user-repository.service';
import { UserDocument } from '@app/data/schemas/users/user.schema';

@Injectable()
export class UserService extends DatabaseBaseService<User> {

    constructor(
        _repo: UserRepositoryService,
    ) {
        super(_repo);
    }

    getByUsername(username: string): Promise<UserDocument | null> {
        return this.repository.findOne({ username: username });
    }
}
