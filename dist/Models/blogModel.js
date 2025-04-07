"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BlogSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String },
    content: { type: String },
    image: { type: String },
    createdAt: { type: Date, default: Date.now }
});
const Blog = (0, mongoose_1.model)('Blog', BlogSchema);
exports.default = Blog;
