"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BlogController = require('../Controllers/blogController');
const uploadMiddleware_1 = __importDefault(require("../Middlewares/uploadMiddleware"));
const authenticationMiddleware_1 = __importDefault(require("../Middlewares/authenticationMiddleware"));
const router = (0, express_1.Router)();
router.post('/', authenticationMiddleware_1.default, uploadMiddleware_1.default.single('file'), BlogController.postBlog);
router.patch('/:blogId', authenticationMiddleware_1.default, uploadMiddleware_1.default.single('file'), BlogController.updateBlog);
router.delete('/:blogId', authenticationMiddleware_1.default, BlogController.deleteBlog);
router.get('/blogs', authenticationMiddleware_1.default, BlogController.getBlogs);
router.get('/userblogs', authenticationMiddleware_1.default, BlogController.getUserBlogs);
exports.default = router;
