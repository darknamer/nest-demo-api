import { Module } from '@nestjs/common';
import { AppController } from './controllers/app/app.controller';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './models/models/user/user';
import { UserSchema } from './models/schemas/user.schema';
import { UserService } from './services/user/user.service';
import { UserController } from './controllers/user/user.controller';
import { AppService } from './services/app/app.service';
import { Connection } from 'mongoose';

@Module({
  imports: [
    
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule { }
