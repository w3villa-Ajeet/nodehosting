import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";

//rest object
const app = express();

//configure env
dotenv.config();

//database configuration
connectDB();

app.use(express.json());

//using routes
app.use("/api/v1/user", userRoutes);

app.listen(8000, () => {
  console.log("first server");
});
