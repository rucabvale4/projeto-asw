import { Router } from 'express';
import { getSquads, createSquadController } from '../controllers/squad_controller.js';

const router = Router();

router.get('/', getSquads);
router.post('/', createSquadController);

export default router;