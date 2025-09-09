import express from 'express'
import { getAllEvents } from '../controllers/eventsController';

const eventsRouter = express.Router()

eventsRouter.get('/getAllEvents', getAllEvents)

export default eventsRouter;