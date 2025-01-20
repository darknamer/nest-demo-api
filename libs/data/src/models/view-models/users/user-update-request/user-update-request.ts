import { ApiProperty } from "@nestjs/swagger";
import { UserCreateRequest } from "../user-create-request/user-create-request";
import { IsNotEmpty, IsString } from "class-validator";

export class UserUpdateRequest extends UserCreateRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id: string;
}
