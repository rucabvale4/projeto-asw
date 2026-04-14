import { prisma } from '../lib/prisma.js';

export const createAction = async (titulo: string, categoria: string, squadId: number) => {
    return await prisma.action.create({
        data: { 
            titulo: titulo, 
            categoria: categoria, 
            squadId: squadId 
        }
    });
};