"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserBlogs = exports.getBlogs = exports.deleteBlog = exports.updateBlog = exports.postBlog = void 0;
const blogModel_1 = __importDefault(require("../Models/blogModel"));
const userModel_1 = __importDefault(require("../Models/userModel"));
const postBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        const file = req.file;
        if (!file) {
            return res.status(404).send({ Message: "Error uploading image" });
        }
        else {
            const image = file.location;
            const user = await userModel_1.default.findOne({ email: req.user });
            const newBlog = new blogModel_1.default({ user: user?._id, title, content, image });
            await newBlog.save();
            return res.status(201).send({ newBlog, Message: "Blog created" });
        }
    }
    catch (error) {
        console.log(error);
    }
};
exports.postBlog = postBlog;
const updateBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const { title, content } = req.body;
        const file = req.file;
        const existingBlog = await blogModel_1.default.findById(blogId);
        if (!existingBlog) {
            return res.status(404).send({ Message: "Blog not found" });
        }
        const image = file ? file.location : existingBlog.image;
        const user = await userModel_1.default.findOne({ email: req.user });
        const updatedBlog = await blogModel_1.default.findByIdAndUpdate(blogId, { user: user ? user._id : existingBlog.user, title, content, image }, { new: true });
        return res.status(200).send({ updatedBlog, Message: "Blog updated" });
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .send({ Message: "An error occurred while updating the blog." });
    }
};
exports.updateBlog = updateBlog;
const deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.id;
        const deleteBlog = await blogModel_1.default.findByIdAndDelete(blogId);
        return res.status(201).send({ deleteBlog, Message: "Blog deleted" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteBlog = deleteBlog;
const getBlogs = async (req, res) => {
    try {
        const user = await userModel_1.default.findOne({ email: req.user });
        const blogs = await blogModel_1.default.find().populate("user", "username image");
        return res.status(200).send({ user, blogs, Message: "All blogs" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getBlogs = getBlogs;
const getUserBlogs = async (req, res) => {
    try {
        const blogId = req.params.id;
        const blogs = await blogModel_1.default.findOne({ user: blogId }).populate("user", "username image");
        return res.status(200).send({ blogs, Message: "All blogs" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getUserBlogs = getUserBlogs;
