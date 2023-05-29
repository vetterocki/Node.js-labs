import {UserEntity} from "../model/user.entity";
import * as uuid from "uuid";

const users: UserEntity[] = [
    {
        id: "1",
        username: 'vetterocki',
        name: 'Vitalii',
    },
    {
        id: "2",
        username: 'noname',
        name: 'Ivan',
    },
]

class UserDao {

    create(username: string, name: string = ''): UserEntity {
        const user: UserEntity = {
            id: uuid.v4(),
            username: username,
            name: name
        };
        users.push(user);
        return user;
    }

    getById(userId: string): UserEntity {
        return users.find(user => user.id === userId);
    }

    getAll(): UserEntity[] {
        return users;
    }

    update(userId: string, username: string, name: string = ''): UserEntity {
        const index = users.findIndex(user => user.id === userId);
        const user: UserEntity = {id: userId, username, name};
        index !== -1 ? users[index] = user : users.push(user);
        return user;
    }


    delete(userId: string): void {
        const user: UserEntity = this.getById(userId);
        users.splice(users.indexOf(user), 1);
    }


}

export const userDao = new UserDao();