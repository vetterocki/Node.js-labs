import {Post, Text, UserID} from "../../domain/post";

export class PostDto implements Post {
    public id: string | undefined;
    public title: string;
    public dateCreation: string;
    public text: Text;
    public userId: UserID;

    constructor({id, title, text, dateCreation, userId}: Post) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.dateCreation = dateCreation;
        this.userId = userId;
    }

}
