"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticationMiddleware_1 = __importDefault(require("../Middlewares/authenticationMiddleware"));
const uploadMiddleware_1 = __importDefault(require("../Middlewares/uploadMiddleware"));
const UserController = require("../Controllers/userController");
const router = (0, express_1.Router)();
router.get("/me", authenticationMiddleware_1.default, UserController.getUser);
router.patch("/", authenticationMiddleware_1.default, uploadMiddleware_1.default.single("file"), UserController.updateUser);
exports.default = router;
