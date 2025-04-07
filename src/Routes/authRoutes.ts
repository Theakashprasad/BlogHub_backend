import { Router } from "express";
import authenticationMiddleware from "../Middlewares/authenticationMiddleware";
import upload from "../Middlewares/uploadMiddleware";
const AuthController = require("../Controllers/authController");

const router = Router();

router.get("/", authenticationMiddleware, AuthController.getUser);
router.patch(
  "/",
  authenticationMiddleware,
  upload.single("file"),
  AuthController.updateUser
);
router.post("/register", AuthController.postSignup);
router.post("/login", AuthController.postLogin);

export default router;
