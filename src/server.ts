import connectDB from "./Config/dbConfig";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import UserRoutes from "./Routes/userRoutes";
import BlogRoutes from "./Routes/blogRoutes";

dotenv.config();
const app = express();

connectDB();
const port = process.env.PORT;
app.get("/", (req: any, res: any) => res.send("helo world"));

const allowedOrigins = process.env.CLIENT_ORIGINS

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user/", UserRoutes);
app.use("/blog/", BlogRoutes);

app.listen(port, () => {
  console.log(`Server connected at port ${port}`);
});
