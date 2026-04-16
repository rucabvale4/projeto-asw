import { prisma } from '../lib/prisma.js';

export const findAllSquads = async () => {
    return await prisma.squad.findMany({
        include: { actions: true }
    });
};

export const createSquad = async (nomeSquad: string) => {
    return await prisma.squad.create({
        data: { nomeSquad }
    });
};