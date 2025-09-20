import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";

dotenv.config();
databaseConnection();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: "https://moviestream-fullstack-project.vercel.app",
    credentials: true
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", userRoute);
app.get("/", (req, res) => {
    res.send("Welcome to the Netflix Clone Backend");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});