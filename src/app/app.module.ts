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
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule { }
