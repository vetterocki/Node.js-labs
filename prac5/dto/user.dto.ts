import {IsString} from "class-validator";

export class UserDto {
    @IsString()
    username = "";

    @IsString()
    name = "";

    constructor(username: string, name: string) {
        this.username = username;
        this.name = name;
    }
}