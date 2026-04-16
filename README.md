-- TERMINAL --

npx prisma migrate dev --name init_wedo (Para criar as tabelas reais na base de dados).

npx prisma generate (Para atualizar o cliente Prisma).

npx tsx watch src/server.ts (liga a API na porta 3000)

para abrir no browser - http://localhost:3000/api/users
 
para abrir o swagger - http://localhost:3000/api-docs


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