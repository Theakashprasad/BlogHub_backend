"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const accessSecretKey = process.env.JWT_ACCESS_TOKEN_SECRET_KEY;
const generateAccessToken = async (payload) => {
    return jsonwebtoken_1.default.sign(payload, accessSecretKey, { expiresIn: "1h" });
};
exports.generateAccessToken = generateAccessToken;
const verifyToken = async (token) => {
    return jsonwebtoken_1.default.verify(token, accessSecretKey);
};
exports.verifyToken = verifyToken;
