"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUser = exports.postLogin = exports.postSignup = void 0;
const userModel_1 = __importDefault(require("../Models/userModel"));
const passwordUtils_1 = require("../utils/passwordUtils");
const jwtUtils_1 = require("../utils/jwtUtils");
const blogModel_1 = __importDefault(require("../Models/blogModel"));
const postSignup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log(username, email, password);
        const existingUser = await userModel_1.default.findOne({ email });
        if (existingUser) {
            return res
                .status(200)
                .send({ Message: "User already exists with this email" });
        }
        else {
            const hashedPassword = await (0, passwordUtils_1.hashPassword)(password);
            const newUser = new userModel_1.default({
                username: username.toLowerCase().trim(),
                email,
                password: hashedPassword,
            });
            await newUser.save();
            return res.status(201).send(newUser);
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ Message: "Internal Server Error" });
    }
};
exports.postSignup = postSignup;
const postLogin = async (req, res) => {
    console.log("post login");
    try {
        const { email, password } = req.body;
        const existingUser = await userModel_1.default.findOne({ email });
        if (!existingUser) {
            return res
                .status(404)
                .send({ Message: "User not found with this email" });
        }
        const isPasswordMatch = await (0, passwordUtils_1.comparePassword)(password, existingUser.password);
        if (!isPasswordMatch) {
            return res.status(401).send({ Message: "Password does not match" });
        }
        const userBlogs = await blogModel_1.default.find({ user: existingUser._id }).populate("user", "username image");
        const blogs = await blogModel_1.default.find().populate("user", "username image");
        const accessToken = await (0, jwtUtils_1.generateAccessToken)({
            email: existingUser.email,
        });
        res.cookie("userRefreshToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            maxAge: 1 * 60 * 60 * 1000,
        });
        console.log("done");
        return res.status(200).send({
            existingUser,
            accessToken,
            userBlogs,
            blogs,
            Message: "Authentication verified",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ Message: "Internal Server Error" });
    }
};
exports.postLogin = postLogin;
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
