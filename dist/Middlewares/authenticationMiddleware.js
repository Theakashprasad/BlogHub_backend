"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticationMiddleware = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            throw new Error("Authentication failed. Token missing.");
        }
        const accessSecret = process.env.JWT_ACCESS_TOKEN_SECRET_KEY;
        if (!accessSecret) {
            throw new Error("JWT secret key is not set in environment variables.");
        }
        const decoded = jsonwebtoken_1.default.verify(token, accessSecret);
        req.user = decoded.email;
        next();
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
            res
                .status(401)
                .send({ error: "Token expired. Please refresh your token." });
        }
        else if (error instanceof Error) {
            res.status(401).send({ error: "Authentication failed." });
        }
        else {
            res.status(500).send({ error: "An unexpected error occurred." });
        }
    }
};
exports.default = authenticationMiddleware;
