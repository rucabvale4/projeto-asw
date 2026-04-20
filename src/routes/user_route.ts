import { Router } from 'express';
import { getUsers, createUserController, updateUserController, putUserController, deleteUserController } from '../controllers/user_controller.js';
import { validate } from '../middlewares/validate_middleware.js';
import { createUserSchema, updateUserSchema } from '../schemas/user_schema.js';

const router = Router();

router.get('/', getUsers);
router.post('/', validate(createUserSchema), createUserController);
router.patch('/:id', validate(updateUserSchema), updateUserController);
router.put('/:id', validate(createUserSchema), putUserController);
router.delete('/:id', deleteUserController);

export default router;