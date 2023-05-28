import {Router} from "express";
import {Request, Response} from 'express';
import {userService} from "../service/user.service";

const router = Router();


router.get("/:userId", (req: Request, res: Response) => {
    try {
        const user = userService.getUserById(+req.params.userId);
        if (user)
            res.status(200).json(user)
        res.status(404).json({message: 'Bad request'});
    } catch (err) {
        console.log(err)
        res.status(505).json({message: 'Internal Server Error'});
    }
})

router.get("/", (req: Request, res: Response) => {
    try {
        const users = userService.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(505).json({message: 'Internal Server Error'});
    }
})

router.post("/", (req: Request, res: Response) => {
    try {
        const {username, name} = req.body;
        const createdUser = userService.createUser(username, name);
        res.status(201).json(createdUser);
    } catch (err) {
        res.status(505).json({message: 'Internal Server Error'});
    }
})

router.put("/:userId", (req: Request, res: Response) => {
    try {
        const {username, name} = req.body;
        const user = userService.updateUser(+req.params.userId, username, name);
        if (user)
            res.status(200).json(user)
        res.status(404).json({message: 'Bad request'});
    } catch (err) {
        res.status(505).json({message: 'Internal Server Error'});
    }
})

router.delete("/:userId", (req: Request, res: Response) => {
    try {
        const id = +req.params.userId;
        const user = userService.getUserById(id);
        if (user) {
            userService.deleteUser(+req.params.userId);
            res.status(200).json({
                message: "User with id " + id + " was successfully deleted."
            });
        } else res.status(404).json({message: 'Bad request'});
    } catch (err) {
        res.status(505).json({message: 'Internal Server Error'});
    }
})
export const userController = router;