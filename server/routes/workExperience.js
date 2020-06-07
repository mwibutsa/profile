import WorkExperienceController from '../controllers/workExperienceController';
import express from 'express';
import { tryCatchHandler } from '../middlewares/helperMiddlewares';
import { isLoggedIn } from '../middlewares/auth';

const router = express.Router();
const Controller = new WorkExperienceController();

router.get(
  '/:id',
  isLoggedIn,
  tryCatchHandler(Controller.getWorkExperienceById),
);
router.get('/', tryCatchHandler(Controller.getWorkExperience));
router.post('/', isLoggedIn, tryCatchHandler(Controller.addNewWorkExperience));
router.put(
  '/:id',
  isLoggedIn,
  tryCatchHandler(Controller.updateWorkExperience),
);
router.delete(
  '/:id',
  isLoggedIn,
  tryCatchHandler(Controller.deleteWorkExperience),
);

export default router;
