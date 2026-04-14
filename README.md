-- TERMINAL --

npx prisma migrate dev --name init_wedo (Para criar as tabelas reais na base de dados).

npx prisma generate (Para atualizar o cliente Prisma).

npx tsx watch src/server.ts (liga a API na porta 3000!)
(abrir o no browser: http://localhost:3000/api/users)



-- API --

ja está funcional a criação de users, squads e actions

A: para criar Users:

1. Abrir o Thunder Client (instalar se preciso)
2. Clicar em New Request
3. Mudar para Post e meter o url http://localhost:3000/api/users
4. Mudar para Body
5. Em JSON adicionar o cliente. exemplo:
{
  "nome": "Jorge",
  "email": "jorge@wedo.pt",
  "password": "123456",
  "role": "Admin"
}

B: para criar Squads
1. Abrir o Thunder Client
2. Clicar em New Request
3. Mudar para Post e meter o url http://localhost:3000/api/squads
4. Mudar para Body
5. Em JSON adicionar o squad. exemplo:
{ "nomeSquad": "O Squad" }
visualizar em http://localhost:3000/api/squads

C: para criar Action
1. Abrir o Thunder Client
2. Clicar em New Request
3. Mudar para Post e meter o url http://localhost:3000/api/action
4. Mudar para Body
5. Em JSON adicionar a action. exemplo:
{
  "titulo": "Limpeza de Praia",
  "categoria": "Ambiente",
  "squadId": 1 
}
visualizar em http://localhost:3000/api/squads


para procurar e so alterar do Post para Get, e meter a categoria desejada em http://localhost:3000/api/categoria


-- Segundo o gemini falta isto: --


1. Missão Zod (A Segurança)
Neste momento, se eu for ao teu Thunder Client e enviar 123 como email e uma password vazia, a tua API vai tentar guardar isso. O professor quer que uses o Zod.

O que vamos fazer: Criar um "segurança à porta" do servidor. Vamos escrever umas linhas de código que dizem: "O email tem de ter um @ e terminar num domínio; a password tem de ter pelo menos 6 letras". Se a regra falhar, o Zod expulsa o pedido logo na hora com um erro 400 limpo.


2. Missão Swagger (A Documentação)
O professor não vai usar o Thunder Client para testar o teu trabalho. Ele quer abrir um link no navegador e ver uma página web profissional (gerada automaticamente) com todos os teus endpoints explicados e com botões para testar.

O que vamos fazer: Instalar o Swagger e adicionar comentários especiais por cima das tuas rotas para gerar essa página web magicamente.


3. Missão Burocracia (README e Relatório)
A parte não-técnica da entrega.

O que vamos fazer: Escrever o ficheiro README.md (o manual de instruções de como instalar o teu projeto) e ver que parágrafos tens de acrescentar ao teu PDF da Fase 1 para a Reflexão Crítica.
