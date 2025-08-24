import { Router } from "express";
import { test, crearTarea, leerTareas, leerTareaPorId} from "../controllers/tarea.controllers.js";

const router = Router()

router.route("/test").get(test)
router.route("/").get(leerTareas).post(crearTarea)
router.route("/:id").get(leerTareaPorId)
export default router;