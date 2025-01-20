import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './models/models/user/user';
import { UserSchema } from './schemas/users/user.schema';
import { UserRepositoryService } from './repositories/users/user-repository/user-repository.service';
import { ParseDatePipePipe } from './pipes/parse-date-pipe/parse-date-pipe.pipe';

const module = {
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
          API_URL: Joi.string().required(),
          API_PORT: Joi.number().port().default(4000),
          JOB_URL: Joi.string().required(),
          JOB_PORT: Joi.number().port().default(4001),
  
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
  export: [
    ConfigModule,
    MongooseModule,
  ]
};

const repositories = [
  UserRepositoryService,
];
const pipes = [
  ParseDatePipePipe,
];
@Module({
  imports: [
    ...module.imports,
  ],
  providers: [
    ...repositories,
    ...pipes,
  ],
  exports: [
    ...module.export,
    ...repositories,
    ...pipes,
  ],
})
export class DataModule {}
