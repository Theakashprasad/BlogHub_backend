"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticationMiddleware_1 = __importDefault(require("../Middlewares/authenticationMiddleware"));
const UserController = require('../Controllers/userController');
const router = (0, express_1.Router)();
router.get('/', authenticationMiddleware_1.default, UserController.getUser);
// router.patch('/', authenticationMiddleware, upload.single('file'), UserController.updateUser)
router.post('/signup', UserController.postSignup);
router.post('/login', UserController.postLogin);
exports.default = router;
