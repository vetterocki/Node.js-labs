import express from "express";
import {default as usersRouter} from './user'
import {default as postRouter} from './post'
const router = express.Router()

router.use('/user', usersRouter)
router.use('/post', postRouter)

export default router
