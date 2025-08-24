import { Router } from "express";
import { test, crearTarea, leerTareas} from "../controllers/tarea.controllers.js";

const router = Router()

router.route("/test").get(test)
router.route("/").get(leerTareas).post(creartareas)
router.route("/:id").get(leerTareas).post(crearTarea)
export default router;