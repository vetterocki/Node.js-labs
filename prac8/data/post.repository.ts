import {getRepository, Repository} from 'typeorm';
import {PostEntity} from '../domain/post.entity';
import {connection} from "../config/datasource.config";
export class PostRepository {
    private postRepository: Repository<PostEntity>;

    constructor() {
        connection.then(() => this.postRepository = getRepository(PostEntity));
    }

    async create(post: PostEntity): Promise<PostEntity> {
        return this.postRepository.save(post);
    }

}
