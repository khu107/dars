import * as dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import image_router from "./routes";

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/image", image_router);

app.listen(8080, async (): Promise<void> => {
  try {
    const dbUri = process.env.DB_URI;
    if (!dbUri) {
      throw new Error("DB_URI environment variable is not defined.");
    }
    await mongoose.connect(dbUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // propagate the error to the calling code
  }
  console.log("server run");
});
