import express from "express";
import {
  deleteController,
  forgetpasswordController,
  loginController,
  registerController,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.post("/forgetPassword", forgetpasswordController);

router.post("/deleteUser", deleteController);

export default router;
