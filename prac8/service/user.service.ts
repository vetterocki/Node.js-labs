import {UserRepository} from "../data/user.repository";
import UserDto from "../web/dto/user.dto";
import UserMapper from "../web/dto/mapper/user.mapper";
import {UserEntity} from "../domain/user.entity";

class UserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async findById(id: string): Promise<UserDto | null> {
        const userEntity = await this.userRepository.findById(id);
        if (!userEntity) return null;
        return UserMapper.toDto(userEntity);
    }

    async findByUsername(username: string): Promise<UserEntity | null> {
        const userEntity = await this.userRepository.findOne({username});
        return userEntity || null;
    }

    async create(user: UserDto): Promise<UserDto> {
        const userEntity = UserMapper.toEntity(user);
        const createdUserEntity = await this.userRepository.create(userEntity);
        return UserMapper.toDto(createdUserEntity);
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    async update(user: UserDto): Promise<UserDto> {
        const userEntity = UserMapper.toEntity(user);
        const updatedUserEntity = await this.userRepository.update(userEntity);
        return UserMapper.toDto(updatedUserEntity);
    }

    async findAllUsers(page: number, pageSize: number, age?: number, city?: string, postTitle?: string): Promise<UserDto[]> {
        const userEntities = await this.userRepository.findAllUsers(page, pageSize, age, city, postTitle);
        return userEntities.map(UserMapper.toDto);
    }

}

export default UserService;
