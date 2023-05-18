import {UserEntity} from "../../../express/model/user.entity";
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

    getById(userId: number): UserEntity {
        return users.filter(user => user.id === userId.toString())[0];
    }

    getAll(): UserEntity[] {
        return users;
    }

    update(userId: number, username: string, name: string = ''): UserEntity {
        const id = userId.toString();
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                const user = {id: id, username, name: name};
                users.splice(i, 1, user)
                return user;
            }
        }
        const newUser: UserEntity = {id: id, username: username, name: name};
        users.push(newUser);
        return newUser;
    }

    delete(userId: number): void {
        const user: UserEntity = this.getById(userId);
        users.splice(users.indexOf(user), 1);
    }


}

export const userDao = new UserDao();