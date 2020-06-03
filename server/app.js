import express from "express";
import userRouter from "./routes/user";
import projectRouter from "./routes/projects";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use("/user", userRouter);
app.use("/projects", projectRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
