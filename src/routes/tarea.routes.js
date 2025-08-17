import { Router } from "express";
import { test, creartareas, leerTareas} from "../controllers/tarea.controllers.js";

const router = Router()

router.route("/test").get(test)
router.route("/").get(leerTareas).post(creartareas)

export default router;