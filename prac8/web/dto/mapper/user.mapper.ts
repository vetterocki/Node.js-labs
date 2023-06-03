import {UserEntity} from "../../../domain/user.entity";
import UserDto from "../user.dto";
import {PostEntity} from "../../../domain/post.entity";

export default class UserMapper {

    static toDto(userEntity: UserEntity): UserDto {
        const {id, name, username, age, info, posts, email, address} = userEntity
        return new UserDto({id, name, username, age, address, email, info, posts});
    }

    static toEntity(user: UserDto): UserEntity {
        const userEntity = new UserEntity();
        const {id, name, username, age, address, email, info, posts} = user
        userEntity.id = id;
        userEntity.name = name;
        userEntity.username = username;
        userEntity.age = age;
        userEntity.address = address;
        userEntity.email = email;
        userEntity.info = info;
        userEntity.posts = <PostEntity[]>posts;
        return userEntity;
    }
}

