import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routes";
const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(router);

app.listen(8080, () => {
  console.log(`run server http//localhost:${8080}`);
});
