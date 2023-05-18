import {UserEntity} from "../../../express/model/user.entity";
import {UserDto} from "./user.dto";
import {v4 as uuidv4} from 'uuid';

export class UserDtoMapper {
    static entityToDto(entity: UserEntity): UserDto {
        const {username, name} = entity;
        return new UserDto(username, name || '');
    }

    static dtoToEntity(dto: UserDto): UserEntity {
        const id = uuidv4();
        const {username, name} = dto;
        return {id, username, name};
    }
}
