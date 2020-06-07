import { tryCatchHandler } from '../middlewares/helperMiddlewares';

import { isLoggedIn } from '../middlewares/auth';

import EducationController from '../controllers/EducationController';
import express from 'express';

const router = express.Router();
const Controller = new EducationController();

router.get('/', tryCatchHandler(Controller.getEducationalBackground));
router.get(
  '/:id',
  isLoggedIn,
  tryCatchHandler(Controller.getEducationalBackgroundById),
);
router.post(
  '/',
  isLoggedIn,
  tryCatchHandler(Controller.addEducationalBackground),
);
router.put(
  '/:id',
  isLoggedIn,
  tryCatchHandler(Controller.updateEducationalBackground),
);
router.delete(
  '/:id',
  isLoggedIn,
  tryCatchHandler(Controller.deleteEducationalBackground),
);

export default router;
