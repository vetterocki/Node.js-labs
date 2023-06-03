import express from "express";
import {createUser, deleteUserById, getAllUsers, getUserById, updateUser} from "../user.controller";

const router = express.Router()

router.get('', getUserById)
router.get('/all', getAllUsers)
router.put('', createUser)
router.delete('', deleteUserById)
router.post('', updateUser)

export default router
