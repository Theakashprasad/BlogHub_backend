"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUser = void 0;
const userModel_1 = __importDefault(require("../Models/userModel"));
const blogModel_1 = __importDefault(require("../Models/blogModel"));
const getUser = async (req, res) => {
    try {
        const user = await userModel_1.default.findOne({ email: req.user });
        if (user) {
            const userBlogs = await blogModel_1.default.find({ user: user._id });
            return res
                .status(200)
                .send({ user, userBlogs, Message: "Succesfully fetched user details" });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ Message: "Internal Server Error" });
    }
};
exports.getUser = getUser;
const updateUser = async (req, res) => {
    try {
        console.log("updateuser");
        const { username, email } = req.body;
        const file = req.file;
        console.log(file, "file");
        const existingUser = await userModel_1.default.findOne({ email: req.user });
        if (!existingUser) {
            return res.status(404).send({ Message: "User not found" });
        }
        console.log(existingUser, "user ex");
        const image = file ? file.location : existingUser.image;
        const updatedUser = await userModel_1.default.findByIdAndUpdate(existingUser._id, { email: email, username: username, image: image }, { new: true });
        console.log(updatedUser, "up user");
        return res.status(200).send({ updatedUser, Message: "Blog updated" });
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .send({ Message: "An error occurred while updating the blog." });
    }
};
exports.updateUser = updateUser;
