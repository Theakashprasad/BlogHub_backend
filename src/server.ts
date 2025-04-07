import connectDB from "./Config/dbConfig";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./Routes/authRoutes";
import BlogRoutes from "./Routes/blogRoutes";
import UserRoutes from "./Routes/userRoutes";

dotenv.config();
const app = express();

connectDB();
const port = process.env.PORT;
app.get("/", (req: any, res: any) => res.send("helo world"));

const allowedOrigins = process.env.CLIENT_ORIGINS;

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users/", UserRoutes);
app.use("/api/auth/", AuthRoutes);
app.use("/api/blogs/", BlogRoutes);

app.listen(port, () => {
  console.log(`Server connected at port ${port}`);
});
