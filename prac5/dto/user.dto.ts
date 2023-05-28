export class UserDto {
    username = "";

    name = "";

    constructor(username: string, name: string) {
        this.username = username;
        this.name = name;
    }
}