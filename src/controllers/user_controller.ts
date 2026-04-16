import { type Request, type Response } from 'express';
import * as userService from '../services/user_service.js';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.findAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Erro ao procurar utilizadores." });
    }
};

export const createUserController = async (req: Request, res: Response) => {
    try {
        const { nome, email, password, role } = req.body;
        const newUser = await userService.createUser(nome, email, password, role);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: "Dados inválidos ou email já existe." });
    }
};