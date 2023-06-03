import {PostDto} from "../web/dto/post.dto";
import {PostMapper} from "../web/dto/mapper/post.mapper";
import {PostRepository} from "../data/post.repository";


class PostService {
    private postRepository: PostRepository;

    constructor(postRepository: PostRepository) {
        this.postRepository = postRepository;
    }

    async createPost(post: PostDto): Promise<PostDto> {
        const postEntity = PostMapper.toEntity(post);
        const createdPostEntity = await this.postRepository.create(postEntity);
        return PostMapper.toDto(createdPostEntity);

    }

}

export default PostService;
