import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

Schema()
export class User {
    @Prop({ required: true, unique: true })
    username: string;
    @Prop({ required: true })
    first_name: string;
    @Prop({ required: true })
    last_name: string;
    @Prop({ required: true, unique: true })
    email_address: string;
    @Prop({ required: true })
    birthday: Date;
}
