import { Injectable } from '@nestjs/common';
import { User } from 'src/app/models/models/user/user';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/app/models/types/user.type';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
    ) {}

    async all(): Promise<UserDocument[]> {
        return await this.userModel.find().exec();
    }
}
