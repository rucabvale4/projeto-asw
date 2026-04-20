import { z } from 'zod';

export const createSquadSchema = z.object({
  nomeSquad: z.string().min(3, "Nome do squad tem de ter no mínimo 3 caracteres")
});

export const updateSquadSchema = createSquadSchema.partial();