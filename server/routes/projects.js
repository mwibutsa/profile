import express from "express";
import ProjectController from "../controllers/projectController";

import { isLoggedIn } from "../middlewares/auth";
import { tryCatchHandler } from "../middlewares/asyncTryCatch";

const Controller = new ProjectController();

const router = express.Router();

router.get("/:id", isLoggedIn, tryCatchHandler(Controller.getProjectById));
router.get("/", tryCatchHandler(Controller.getProjects));
router.post("/", isLoggedIn, tryCatchHandler(Controller.addProject));
router.put("/:id", isLoggedIn, tryCatchHandler(Controller.updateProject));
router.delete("/:id", isLoggedIn, tryCatchHandler(Controller.deleteProject));

export default router;
