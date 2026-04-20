import { prisma } from '../lib/prisma.js';

export const findAllUsers = async () => {
    return await prisma.user.findMany();
};

export const createUser = async (nome: string, email: string, password: string, role: string) => {
    return await prisma.user.create({
        data: { nome, email, password, role }
    });
};

export const deleteUser = async (id: number) => {
    return await prisma.user.delete({ where: { id } });
};

export const updateUser = async (id: number, data: any) => {
    return await prisma.user.update({ where: { id }, data });
};