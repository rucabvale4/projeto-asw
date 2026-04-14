import { Router } from 'express';
import { createActionController } from '../controllers/action_controller.js';

const router = Router();

router.post('/', createActionController);

export default router;