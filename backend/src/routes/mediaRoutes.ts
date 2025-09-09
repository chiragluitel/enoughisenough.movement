import express from "express"
import { createNewPost, getAllPosts } from "../controllers/postsController";
import { uploadMedia } from "../controllers/mediaController";

const mediaRouter = express.Router()

mediaRouter.get('/uploadMedia', uploadMedia)
export default mediaRouter;