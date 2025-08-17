import { Router } from "express";
import { test } from "../controllers/tarea.controllers.js";

const router = Router()

router.route("/test").get(test)

export default router;