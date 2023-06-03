import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Age, City, Email, UserId, Info, Name, Street, Username} from "./user";
import {PostEntity} from "./post.entity";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: UserId;
    @Column()
    age: Age;
    @Column()
    email: Email;
    @Column()
    info: Info;
    @Column()
    name: Name;
    @Column()
    username: Username;
    @OneToMany(() => PostEntity, post => post.user)
    posts: PostEntity[];
    @Column('jsonb')
    address: Record<string, City | Street>;
}
