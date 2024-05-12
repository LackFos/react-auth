import express from "express";
import * as authController from "../controllers/authController.js";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router.post("/login", authController.login);
router.post("/register", authController.register);

router.get("/profile", userController.profile);

export default router;
