import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";

import { routes } from "./routes";
import { AppError } from "../errors/AppError";


const app = express();
app.use(express.json());

app.use(routes);
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }

  return response.json({ error: err.message });
})


app.listen(3000, () => {
  console.log("Server started on port 3333!");
})