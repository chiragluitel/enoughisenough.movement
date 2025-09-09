import express, { Request, Response } from 'express'
import dotenv from "dotenv";
import {createServer} from 'http'
import {establishConnectionToDB} from './database'
import cors from "cors";
import userRouter from './routes/userRoutes';
import postsRouter from './routes/postsRoutes';
import eventsRouter from './routes/eventsRoutes';
import mediaRouter from './routes/mediaRoutes';

dotenv.config();
const eieExpressServer = express();

const port = Number(process.env.PORT);
eieExpressServer.use(cors());
eieExpressServer.use(express.json())

eieExpressServer.get('/', (req: Request, res: Response) => {
    res.send('Welcome to EnoughISEnough');
})

eieExpressServer.use('/users', userRouter)
eieExpressServer.use('/posts', postsRouter)
eieExpressServer.use('/events', eventsRouter)
eieExpressServer.use('/media', mediaRouter)
const httpServer = createServer(eieExpressServer);

async function startServer(){
    try{
        await establishConnectionToDB();
        httpServer.listen(port, "0.0.0.0", ()=>{console.log('Server Started at', port)})
    }catch(error:any){
        console.error('Error starting server', error)
    }
}

startServer();
