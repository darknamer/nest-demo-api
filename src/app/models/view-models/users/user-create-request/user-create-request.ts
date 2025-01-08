import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class UserCreateRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    first_name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    last_name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email_address: string;

    @ApiProperty()
    @IsDateString()
    birthday: Date;
}
