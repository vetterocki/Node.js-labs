import express from "express";
import {createPost} from "../post.controller";

const router = express.Router()

router.post('/', createPost)

export default router
