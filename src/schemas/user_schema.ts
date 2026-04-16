import { z } from 'zod';

export const createUserSchema = z.object({
  nome: z.string({
    message: "O nome é obrigatório e deve ser texto."
  }).min(2, "O nome deve ter pelo menos 2 caracteres."),
  
  email: z.string({
    message: "O email é obrigatório."
  }).email("Email inválido. Certifica-te que tem um '@' e um domínio."),
  
  password: z.string({
    message: "A password é obrigatória."
  }).min(6, "A password tem de ter pelo menos 6 caracteres."),
  
  role: z.string({
    message: "A role (função) é obrigatória."
  }).min(1, "A role não pode estar vazia.")
});