import {PostEntity} from "../../../domain/post.entity";
import {Post} from "../../../domain/post";
import {PostDto} from "../post.dto";

export class PostMapper {
    static toDto(entity: PostEntity): PostDto {
        const {id, title, text, dateCreation, userId} = entity;
        return new PostDto({id, title, text, dateCreation: dateCreation, userId});
    }

    static toEntity(domain: Post): PostEntity {
        const entity = new PostEntity();
        entity.id = domain.id;
        entity.title = domain.title;
        entity.text = domain.text;
        entity.dateCreation = domain.dateCreation
        entity.userId = domain.userId
        return entity;
    }
}
