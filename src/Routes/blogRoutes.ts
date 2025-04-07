import { Router } from "express";

const BlogController = require("../Controllers/blogController");
import upload from "../Middlewares/uploadMiddleware";
import authenticationMiddleware from "../Middlewares/authenticationMiddleware";

const router = Router();

router.get("/", authenticationMiddleware, BlogController.getBlogs);
router.get("/:id", authenticationMiddleware, BlogController.getUserBlogs);
router.post(
  "/",
  authenticationMiddleware,
  upload.single("file"),
  BlogController.postBlog
);
router.put(
  "/:id",
  authenticationMiddleware,
  upload.single("file"),
  BlogController.updateBlog
);
router.delete("/:id", authenticationMiddleware, BlogController.deleteBlog);

export default router;
