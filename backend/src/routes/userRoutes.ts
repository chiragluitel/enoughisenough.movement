import express from 'express'
import { getUserInfo } from '../controllers/userController';

const userRouter = express.Router()

userRouter.get('/getUserInfo', getUserInfo)

export default userRouter;