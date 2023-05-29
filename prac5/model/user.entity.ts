export class UserEntity {
    id: string;
    username: string;
    name: string = '';

    constructor(id: string, username: string) {
        this.id = id;
        this.username = username;
    }
}