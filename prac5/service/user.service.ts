import {userDao} from "../data/user.dao";
import {UserDto} from "../dto/user.dto";
import {UserDtoMapper} from "../dto/user.dto.mapper";

class UserService {
    createUser(username: string, name?: string): UserDto {
        const userEntity = userDao.create(username, name);
        return UserDtoMapper.entityToDto(userEntity);
    }

    getUserById(userId: string): UserDto | undefined {
        const userEntity = userDao.getById(userId);
        return userEntity ? UserDtoMapper.entityToDto(userEntity) : undefined;
    }

    getAllUsers(): UserDto[] {
        return userDao.getAll().map(user => UserDtoMapper.entityToDto(user));
    }

    updateUser(userId: string, username: string, name?: string): UserDto {
        const userEntity = userDao.update(userId, username, name);
        return UserDtoMapper.entityToDto(userEntity);
    }

    deleteUser(userId: string): void {
        userDao.delete(userId);
    }
}

export const userService = new UserService();