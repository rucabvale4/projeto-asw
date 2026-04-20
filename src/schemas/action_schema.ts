import { z } from 'zod';

export const createActionSchema = z.object({
  titulo: z.string().min(3, "Nome da action tem de ter no mínimo 3 letras"),
  categoria: z.string().min(2, "Categoria da action tem de ter no mínimo 2 letras"),
  descricao: z.string().optional(),
  squadId: z.number({message: "O ID do Squad é obrigatório e tem de ser um número ."}).int("O ID do Squad tem de ser um número inteiro.").positive("O ID do Squad tem de ser um número positivo (maior que zero).")});

export const updateActionSchema = createActionSchema.partial();