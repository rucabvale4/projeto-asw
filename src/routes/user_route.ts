import { Router } from 'express';
import { getUsers, createUserController } from '../controllers/user_controller.js';

const router = Router();

// GET /api/users -> Lista todos os utilizadores
router.get('/', getUsers);

// POST /api/users -> Cria um novo utilizador
router.post('/', createUserController);

export default router;