import express from "express"
import { createNewPost, getAllPosts } from "../controllers/postsController";

const postsRouter = express.Router()

postsRouter.get('/getAllPosts', getAllPosts)
postsRouter.post('/createNewPost', createNewPost )
export default postsRouter;