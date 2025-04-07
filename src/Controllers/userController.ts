import User from "../Models/userModel";
import { Response } from "express";
import { CustomRequest } from "../Middlewares/authenticationMiddleware";
import Blog from "../Models/blogModel";
import IMulterS3File from "../Interface/multerInterface";

export const getUser = async (req: CustomRequest, res: Response) => {
  try {
    const user = await User.findOne({ email: req.user });
    if (user) {
      const userBlogs = await Blog.find({ user: user._id });
      return res
        .status(200)
        .send({ user, userBlogs, Message: "Succesfully fetched user details" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ Message: "Internal Server Error" });
  }
};

export const updateUser = async (req: CustomRequest, res: Response) => {
  try {
    console.log("updateuser");
    const { username, email } = req.body;
    const file = req.file as unknown as IMulterS3File;
    console.log(file, "file");
    const existingUser = await User.findOne({ email: req.user });
    if (!existingUser) {
      return res.status(404).send({ Message: "User not found" });
    }
    console.log(existingUser, "user ex");
    const image = file ? file.location : existingUser.image;

    const updatedUser = await User.findByIdAndUpdate(
      existingUser._id,
      { email: email, username: username, image: image },
      { new: true }
    );
    console.log(updatedUser, "up user");
    return res.status(200).send({ updatedUser, Message: "Blog updated" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ Message: "An error occurred while updating the blog." });
  }
};
