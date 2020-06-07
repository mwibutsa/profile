import express from 'express';
import userRouter from './routes/user';
import projectRouter from './routes/projects';
import workExperienceRouter from './routes/workExperience';
import skillsRouter from './routes/skills';
import educationRouter from './routes/education';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

const port = process.env.PORT || 3000;

app.use('/user', userRouter);
app.use('/projects', projectRouter);
app.use('/work-experience', workExperienceRouter);
app.use('/education', educationRouter);
app.use('/skills', skillsRouter);

app.use((req, res, next) => {
  res.status(404).json({
    error:
      'The url does not either exist or support the request method provided.',
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
