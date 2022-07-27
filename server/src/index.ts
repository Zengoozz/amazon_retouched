import express from "express";
import mongoose from "mongoose";

import authRouter from "./routes/auth";

const app: express.Application = express();
const PORT: number = 3000;
const DB =
  "mongodb+srv://zengo:172012M@cluster0.45uf77h.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(authRouter);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, (): void => {
  console.log(`Connected at port: ${PORT}`);
});

export default app;
