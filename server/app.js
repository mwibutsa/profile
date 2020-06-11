import express from "express";
import userRouter from "./routes/user";
import projectRouter from "./routes/projects";
import workExperienceRouter from "./routes/workExperience";
import skillsRouter from "./routes/skills";
import educationRouter from "./routes/education";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import compression from "compression";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const port = process.env.PORT || 5000;

app.disable("x-powered-by");
app.use(compression());
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.use("/api/user", userRouter);
app.use("/api/projects", projectRouter);
app.use("/api/work-experience", workExperienceRouter);
app.use("/api/education", educationRouter);
app.use("/api/skills", skillsRouter);


// app.use((req, res, next) => {
//   res.status(404).json({
//     error:
//       "The url does not either exist or support the request method provided.",
//   });
// });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});