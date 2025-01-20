import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './models/models/user/user';
import { UserSchema } from './schemas/users/user.schema';
import { UserRepositoryService } from './repositories/users/user-repository/user-repository.service';
import { RepositoryBaseService } from './repositories/base/repository-base/repository-base.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        PORT: Joi.number().port().default(3000),

        MONGO_URI: Joi.string().required(),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),

    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema.loadClass(User) },
    ]),
  ],
  providers: [UserRepositoryService, RepositoryBaseService],
  exports: [],
})
export class DataModule {}
