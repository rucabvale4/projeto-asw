import { prisma } from '../lib/prisma.js';

export const createAction = async (titulo: string, categoria: string, squadId: number) => {
    return await prisma.action.create({
        data: { titulo, categoria, squadId }
    });
};

export const findAllActions = async () => {
    return await prisma.action.findMany();
};

export const deleteAction = async (id: number) => {
    return await prisma.action.delete({ where: { id } });
};

export const updateAction = async (id: number, data: any) => {
    return await prisma.action.update({ where: { id }, data });
};