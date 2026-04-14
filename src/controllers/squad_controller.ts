import { type Request, type Response } from 'express';
import * as squadService from '../services/squad_service.js';

export const getSquads = async (req: Request, res: Response) => {
    try {
        const squads = await squadService.findAllSquads();
        res.json(squads);
    } catch (error) {
        res.status(500).json({ error: "Erro ao procurar squads." });
    }
};

export const createSquadController = async (req: Request, res: Response) => {
    try {
        const { nomeSquad } = req.body;
        const newSquad = await squadService.createSquad(nomeSquad);
        res.status(201).json(newSquad);
    } catch (error) {
        res.status(400).json({ error: "Dados inválidos para o Squad." });
    }
};