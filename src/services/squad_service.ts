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

export const deleteSquad = async (id: number) => {
    return await prisma.squad.delete({ where: { id } });
};

export const updateSquad = async (id: number, data: any) => {
    return await prisma.squad.update({ where: { id }, data });
};