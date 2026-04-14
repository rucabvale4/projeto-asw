import { prisma } from '../lib/prisma.js';

export const findAllSquads = async () => {
    return await prisma.squad.findMany({
        include: { actions: true } // Isto permite ver as ações de cada squad
    });
};

export const createSquad = async (nomeSquad: string) => {
    return await prisma.squad.create({
        data: { nomeSquad }
    });
};