import { type Request, type Response } from 'express';
import * as actionService from '../services/action_service.js';

export const createActionController = async (req: Request, res: Response) => {
    try {
        const { titulo, categoria, squadId } = req.body;

        const novaAction = await actionService.createAction(titulo, categoria, squadId);

        res.status(201).json(novaAction);
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar ação. Verifica se o Squad existe." });
    }
};