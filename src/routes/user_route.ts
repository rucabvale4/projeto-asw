import { Router } from 'express';
import { getUsers, createUserController } from '../controllers/user_controller.js';
import { validate } from '../middlewares/validate_middleware.js';
import { createUserSchema } from '../schemas/user_schema.js';

/**
 * @openapi
 * /api/users:
 * get:
 * tags:
 * - Users
 * summary: Lista todos os utilizadores
 * responses:
 * 200:
 * description: Sucesso
 * post:
 * tags:
 * - Users
 * summary: Cria um novo utilizador
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * nome:
 * type: string
 * email:
 * type: string
 * password:
 * type: string
 * role:
 * type: string
 * responses:
 * 201:
 * description: Criado
 */

const router = Router();

router.get('/', getUsers);

router.post('/', validate(createUserSchema), createUserController);

export default router;