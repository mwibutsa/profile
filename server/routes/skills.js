import { tryCatchHandler } from '../middlewares/helperMiddlewares';

import { isLoggedIn } from '../middlewares/auth';

import SkillsController from '../controllers/SkillsController';
import express from 'express';

const router = express.Router();

const Controller = new SkillsController();

router.get('/:id', isLoggedIn, tryCatchHandler(Controller.getSkillsById));
router.get('/', tryCatchHandler(Controller.getSkills));
router.post('/', isLoggedIn, tryCatchHandler(Controller.addSkills));
router.put('/:id', isLoggedIn, tryCatchHandler(Controller.updateSkills));
router.delete('/:id', isLoggedIn, tryCatchHandler(Controller.deleteSkills));

export default router;
