import {PostEntity} from "./post.entity";

type UserId = Required<string> | undefined
type Username = Required<string>
type Name = Partial<string>
type Email = Required<string>
type Age = Required<number>
type City = Required<string>
type Street = Required<string>
type Info = Partial<string>
type Address = Record<string, City | Street>
type Posts = Partial<PostEntity[]> | undefined

interface User {
    id: UserId,
    username: Username,
    name: Name,
    age: Age,
    email: Email,
    address: Address,
    info: Info
    posts: Posts
}

export {UserId, Username, Name, Email, Age, City, Street, Info, Address, Posts, User}

