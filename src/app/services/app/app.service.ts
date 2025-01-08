import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/app/models/models/user/user';

@Injectable()
export class AppService {

  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}
  
  getHello(): string {
    return 'Hello World!';
  }

  async getUser() {
    return await this.userModel.find().exec();
  }
}
