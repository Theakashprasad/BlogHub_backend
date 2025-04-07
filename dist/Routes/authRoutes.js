"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticationMiddleware_1 = __importDefault(require("../Middlewares/authenticationMiddleware"));
const uploadMiddleware_1 = __importDefault(require("../Middlewares/uploadMiddleware"));
const AuthController = require("../Controllers/authController");
const router = (0, express_1.Router)();
router.get("/", authenticationMiddleware_1.default, AuthController.getUser);
router.patch("/", authenticationMiddleware_1.default, uploadMiddleware_1.default.single("file"), AuthController.updateUser);
router.post("/register", AuthController.postSignup);
router.post("/login", AuthController.postLogin);
exports.default = router;
