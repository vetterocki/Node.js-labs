import PostService from "../service/post.service";
import {PostRepository} from "../data/post.repository";
import {PostDto} from "./dto/post.dto";
import {Request, Response} from "express";

const postRepository = new PostRepository()
const postService = new PostService(postRepository);

export const createPost = async (req: Request, res: Response) => {
    try {
        const {userId, title, text} = req.body;
        const post = new PostDto({userId, text, title, id: undefined, dateCreation: new Date().toDateString()});
        const createdPost = await postService.createPost(post);
        return res.status(200).json({post: createdPost});
    } catch (error) {
        return res.status(500).json(error);
    }
};
