import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {UserEntity} from './user.entity';
import {DateCreation, Post, PostID, Title, Text, UserID} from './post';

@Entity()
export class PostEntity implements Post {
    @PrimaryGeneratedColumn('uuid')
    id: PostID;

    @Column()
    dateCreation: DateCreation;

    @Column()
    text: Text;

    @Column()
    title: Title;

    @ManyToOne(() => UserEntity, user => user.posts)
    user: UserEntity;

    @Column({nullable: true})
    userId: UserID;
}
