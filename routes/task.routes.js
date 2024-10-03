import { Router } from "express";
import {
    createTask,
    getTasks,
    getTask,
    updateTask
} from "../controllers/task.controller.js";

const router = Router()

router.get('/tasks', getTasks)

router.get('/tasks/:id', getTask)

router.post('/tasks', createTask)

router.put('/tasks', updateTask)

export default router