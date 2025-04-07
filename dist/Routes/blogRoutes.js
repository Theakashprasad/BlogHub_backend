"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BlogController = require("../Controllers/blogController");
const uploadMiddleware_1 = __importDefault(require("../Middlewares/uploadMiddleware"));
const authenticationMiddleware_1 = __importDefault(require("../Middlewares/authenticationMiddleware"));
const router = (0, express_1.Router)();
router.get("/", authenticationMiddleware_1.default, BlogController.getBlogs);
router.get("/:id", authenticationMiddleware_1.default, BlogController.getUserBlogs);
router.post("/", authenticationMiddleware_1.default, uploadMiddleware_1.default.single("file"), BlogController.postBlog);
router.put("/:id", authenticationMiddleware_1.default, uploadMiddleware_1.default.single("file"), BlogController.updateBlog);
router.delete("/:id", authenticationMiddleware_1.default, BlogController.deleteBlog);
exports.default = router;
