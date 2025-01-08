import { Injectable } from '@nestjs/common';
import { User } from 'src/app/models/models/user/user';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/app/models/types/user.type';
import { UserCreateRequest } from 'src/app/models/view-models/users/user-create-request/user-create-request';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
    ) { }

    async all(): Promise<UserDocument[]> {
        return await this.userModel.find().exec();
    }
    async getById(id: string) {
        return await this.userModel.findById(id).exec();
    }
    async getByUsername(username: string) {
        return await this.userModel.findOne({ username: username }).exec();
    }
    async getByEmailAddress(emailAddress: string) {
        return await this.userModel.findOne({ email_address: emailAddress }).exec();
    }
    async create(request: UserCreateRequest) {
        let duplicatedUser = await this.getByUsername(request.username);
        if (duplicatedUser != null) {
            return null;
        }

        duplicatedUser = await this.getByEmailAddress(request.email_address);
        if (duplicatedUser != null) {
            return null;
        }

        // create instance
        const user = await this.userModel.create({
            username: request.username.trim(),
            first_name: request.first_name,
            last_name: request.last_name,
            email_address: request.email_address,
            birthday: new Date(request.birthday),
        });

        // save to database
        return user;
    }
    async update(user: UserDocument): Promise<UserDocument> {
        return user.save();
    }
    async delete(user: UserDocument) {
        await user.deleteOne();
    }
}
