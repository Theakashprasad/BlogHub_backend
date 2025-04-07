"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig_1 = __importDefault(require("./Config/dbConfig"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./Routes/userRoutes"));
const blogRoutes_1 = __importDefault(require("./Routes/blogRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, dbConfig_1.default)();
const port = process.env.PORT;
app.get("/", (req, res) => res.send("helo world", allowedOrigins));
const allowedOrigins = process.env.CLIENT_ORIGINS;
app.use((0, cors_1.default)({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/user/", userRoutes_1.default);
app.use("/blog/", blogRoutes_1.default);
app.listen(port, () => {
    console.log(`Server connected at port ${port}`);
});
