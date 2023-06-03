import {Address, Age, Email, UserId, Info, User, Name, Posts, Username} from "../../domain/user";


class UserDto implements User {
    public id: UserId;
    public address: Address;
    public age: Age;
    public email: Email;
    public info: Info;
    public name: Name;
    public posts: Posts;
    public username: Username;

    constructor({id, age, address, info, name, username, posts, email}: User) {
        this.id = id;
        this.age = age;
        this.address = address;
        this.info = info;
        this.name= name;
        this.username = username;
        this.posts = posts;
        this.email = email;
    }


}

export default UserDto
