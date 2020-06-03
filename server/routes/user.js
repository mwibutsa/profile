import express from "express";
import UserController from "../controllers/userController";
import { isLoggedIn } from "../middlewares/auth";
import { tryCatchHandler } from "../middlewares/asyncTryCatch";

const Controller = new UserController();

const router = express.Router();

router.get("/:id", tryCatchHandler(Controller.getUser));
router.post("/login", tryCatchHandler(Controller.login));
router.put("/:id", isLoggedIn, tryCatchHandler(Controller.updateUser));
router.delete("/:id", isLoggedIn, tryCatchHandler(Controller.deleteUser));
router.post("/signup", tryCatchHandler(Controller.signup));

export default router;
