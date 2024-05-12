import "dotenv/config.js";
import cors from "cors";
import express from "express";
import cookies from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import { connectToDatabase } from "./database.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
connectToDatabase();

app.use(express.json());
app.use(cookies());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use("/api/v1/users", userRouter);

app.use(errorHandler);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`⚡ Application running at http://localhost:${port}`);
});
