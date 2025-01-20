import { UserService } from '@app/core/services/databases/users/user/user.service';
import { User } from '@app/data/models/models/user/user';
import { UserDocument } from '@app/data/schemas/users/user.schema';
import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Request } from 'express';

@Controller('api/user')
export class UserController {

    constructor(
        private readonly user: UserService,
    ) { }

    @Get("all")
    @ApiResponse({ status: 201, type: User, isArray: true })
    async all(): Promise<UserDocument[]> {
        return await this.user.all();
    }
    @Get("count")
    @ApiResponse({ status: 201, type: Number })
    async count(@Req() request: Request): Promise<number> {
        return await this.user.count({});
    }
    @Get('getById/:id')
    @ApiResponse({ status: 201, type: User })
    async getById(@Param('id') id: string): Promise<UserDocument> {
        return await this.user.getById(id);
    }
    @Get('getByUsername')
    @ApiResponse({ status: 201, type: User })
    async getByUsername(@Query('username') username: string): Promise<UserDocument> {
        return await this.user.getByUsername(username);
    }
    // @Post("create")
    // @ApiResponse({ status: 201, type: User })
    // async create(@Body() body: UserCreateRequest): Promise<UserDocument> {
    //     const response = await this.user.create(body);

    //     // check insert user fails
    //     if (response == null) {
    //         throw new BadRequestException("Duplicated user");
    //     }

    //     // insert user with successfully
    //     return response;
    // }
    // @Put("update")
    // @ApiResponse({ status: 201, type: User })
    // async update(@Body() body: UserUpdateRequest) {
    //     const user = await this.user.getById(body.id);
    //     if (user == null) {
    //         throw new BadRequestException("User not found");
    //     }

    //     let dupUser = await this.user.getByUsername(body.username);
    //     if (dupUser != null && user._id.toString() != dupUser._id.toString()) {
    //         throw new BadRequestException("Duplicated user");
    //     }

    //     dupUser = await this.user.getByEmailAddress(body.email_address);
    //     if (dupUser != null && user._id.toString() != dupUser._id.toString()) {
    //         throw new BadRequestException("Duplicated user");
    //     }

    //     user.username = body.username;
    //     user.first_name = body.first_name;
    //     user.last_name = body.last_name;
    //     user.email_address = body.email_address;
    //     user.birthday = new Date(body.birthday);

    //     return await this.user.update(user);
    // }

    // @Delete("delete/:id")
    // async delete(@Param('id') id: string) {
    //     const user = await this.user.getById(id);
    //     if (user == null) {
    //         throw new BadRequestException("User not found");
    //     }
    //     await this.user.delete(user);
    // }
}