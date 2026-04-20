# WeDo - API

## Requisitos
Para a execução deste projeto, é necessário instalar as seguintes ferramentas:
* **Node.js** (versão 18 ou superior)
* **PostgreSQL** (instância local ou na cloud)

Após a instalação das ferramentas base, devem ser seguidos os seguintes passos de configuração:
1. Instalar as dependências do projeto executando o comando `npm install` no diretório raiz.
2. Criar um ficheiro designado `.env` na raiz do projeto, contendo a string de ligação à base de dados de acordo com o seguinte formato:
   `DATABASE_URL="postgresql://utilizador:password@localhost:5432/nome_da_base_de_dados?schema=public"`

---

## Execução do Servidor

Após a configuração dos requisitos iniciais, devem ser executados os seguintes comandos no terminal, dentro do diretório do projeto, para iniciar a aplicação:

1. **Criar as tabelas na base de dados:**
   npx prisma migrate dev --name init_wedo

2. **Atualizar o cliente Prisma:**
   npx prisma generate

3. **Iniciar a API:**
   npx tsx watch src/server.ts

O servidor ficará disponível e a escutar pedidos na porta 3000 (http://localhost:3000).

---

## Endpoints Disponíveis

A API possui documentação interativa gerada através do Swagger, a qual permite a exploração e o teste de todos os endpoints implementados.

* **Documentação Swagger:** http://localhost:3000/api-docs

### 1. Utilizadores (Users)
* **GET** `http://localhost:3000/api/users` - Lista todos os utilizadores registados.
* **POST** `http://localhost:3000/api/users` - Cria um novo utilizador.

### 2. Grupos (Squads)
* **GET** `http://localhost:3000/api/squads` - Lista todos os grupos existentes.
* **POST** `http://localhost:3000/api/squads` - Cria um novo grupo.

### 3. Ações (Actions)
* **GET** `http://localhost:3000/api/actions` - Lista todas as ações.
* **POST** `http://localhost:3000/api/actions` - Cria uma nova ação associada a um grupo.

### 4. Categorias
* **GET** `http://localhost:3000/api/categoria` - Permite a pesquisa de ações através do filtro por categoria.