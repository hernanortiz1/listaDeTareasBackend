import tareasRoutes from "./tarea.routes.js";
import { Router } from "express";


const router = Router()

router.use("/tareas", tareasRoutes)

export default router