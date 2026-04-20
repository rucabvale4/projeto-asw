import { Router } from 'express';
import { getActions, createActionController, updateActionController, putActionController, deleteActionController } from '../controllers/action_controller.js';
import { validate } from '../middlewares/validate_middleware.js';
import { createActionSchema, updateActionSchema } from '../schemas/action_schema.js';

const router = Router();

router.get('/', getActions);
router.post('/', validate(createActionSchema), createActionController);
router.patch('/:id', validate(updateActionSchema), updateActionController);
router.put('/:id', validate(createActionSchema), putActionController);
router.delete('/:id', deleteActionController);

export default router;