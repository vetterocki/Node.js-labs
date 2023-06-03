import { UserId } from './user';

type PostID = string | undefined;
type DateCreation = string;
type Title = string;
type Text = string;
type UserID = UserId;

interface Post {
    id: PostID;
    dateCreation: DateCreation;
    title: Title;
    text: Text;
    userId: UserID;
}

export { PostID, DateCreation, Title, Text, UserID, Post };
