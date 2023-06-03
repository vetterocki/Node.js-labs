import {Request, Response} from 'express';
import UserService from "../service/user.service";
import {UserRepository} from "../data/user.repository";
import UserDto from "./dto/user.dto";
import {UserId} from "../domain/user";

const userRepository = new UserRepository()
const userService = new UserService(userRepository)
export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {id} = req.query as { id: string };
        const user = await userService.findById(id);

        return user ? res.status(200).json({user}) : res.status(404).json({error: 'UserDto not found'});

    } catch (error) {
        console.log(error)
        return res.status(400).json({error: 'Bad request'});
    }
};

export const getAllUsers = async (req: Request, res: Response): Promise<Response<any>> => {
    try {
        const {page = 1, pageSize = 10, age, city, postTitle} = req.query;
        const users = await userService.findAllUsers(+page, +pageSize,
            age as number, city as string, postTitle as string);
        return res.status(200).json({users});
    } catch (error) {
        return res.status(500).json({error: 'Internal server error'});
    }
};
export const createUser = async (req: Request, res: Response): Promise<Response<any>> => {

    try {
        const {address, age, email, info, username, name, posts} = req.body;
        if (!username) return res.status(400).json({message: "username is empty"});

        const user = await userService.findByUsername(username);
        if (user) {
            return res.status(400).json({error: 'UserDto already exists'});
        }

        const newUser = new UserDto(
            {email, info, name, username, age, address, posts, id: undefined,});
        await userService.create(newUser);

        return res.status(200).json({message: 'OK'});
    } catch (e) {
        console.log(e)
        return res.status(500).json({error: 'Internal error'});
    }
};


export const deleteUserById = async (req: Request, res: Response): Promise<Response<any>> => {
    try {
        const {id} = req.body as { id: UserId };

        const user = await userService.findById(id!);
        if (user) {
            await userService.delete(id!);
            return res.status(200).json({message: `User with ID ${id} has been deleted`});
        } else {
            return res.status(404).json({error: `User with ID ${id} does not exist`});
        }
    } catch (e) {
        return res.status(400).json({error: 'Bad request'});
    }
};
export const updateUser = async (req: Request, res: Response): Promise<Response<any>> => {
    try {
        const {id, ...toUpdate} = req.body;

        const user = await userService.findById(id);
        if (user) {
            await userService.update(Object.assign(user, toUpdate));
            return res.status(200).json({message: 'ok'});
        } else {
            return res.status(404).json({error: `User with ID ${id} does not exist`});
        }
    } catch (e) {
        return res.status(500).json(e);
    }
};


