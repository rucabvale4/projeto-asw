import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import action_route from './routes/action_route.js';
import userRoutes from './routes/user_route.js';
import squadRoutes from './routes/squad_route.js';

const app = express();
app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'WeDo API - Documentação',
      version: '1.0.0',
      description: 'API para gestão de Users, Squads e Actions',
    },
    servers: [
      {
        url: 'http://localhost:3000/',
        description: 'Servidor Local',
      },
    ],
    paths: {
      // --- Users ---
      '/api/users': {
        get: {
          summary: 'Lista todos os utilizadores',
          tags: ['Users'],
          responses: { '200': { description: 'Lista devolvida com sucesso' } },
        },
        post: {
          summary: 'Cria um novo utilizador',
          tags: ['Users'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    nome: { type: 'string', example: 'Gil Dias' },
                    email: { type: 'string', example: 'gil@wedo.pt' },
                    password: { type: 'string', example: 'password_123' },
                    role: { type: 'string', example: 'Admin' },
                  },
                },
              },
            },
          },
          responses: {
            '201': { description: 'Utilizador criado com sucesso' },
            '400': { description: 'Erro na validação dos dados' },
          },
        },
      },
      // --- Squads ---
      '/api/squads': {
        get: {
          summary: 'Lista todos os Squads',
          tags: ['Squads'],
          responses: { '200': { description: 'Lista devolvida com sucesso' } },
        },
        post: {
          summary: 'Cria um novo Squad',
          tags: ['Squads'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    nomeSquad: { type: 'string', example: 'Os Jogadores' }
                  },
                },
              },
            },
          },
          responses: {
            '201': { description: 'Squad criado com sucesso' },
            '400': { description: 'Erro na validação dos dados' },
          },
        },
      },
      // --- Actions ---
      '/api/actions': {
        get: {
          summary: 'Lista todas as Actions',
          tags: ['Actions'],
          responses: { '200': { description: 'Lista devolvida com sucesso' } },
        },
        post: {
          summary: 'Cria uma nova Action',
          tags: ['Actions'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    titulo: { type: 'string', example: 'Peladinha no Jamor' },
                    categoria: { type: 'string', example: 'Desporto' },
                    descricao: { type: 'string', example: 'Jogo futebol 7x7 no estadio do Jamor' },
                    squadId: { type: 'number', example: 1 }
                  },
                },
              },
            },
          },
          responses: {
            '201': { description: 'Ação criada com sucesso' },
            '400': { description: 'Erro na validação dos dados' },
          },
        },
      }
    },
  },
  apis: [], 
};

const specs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api/actions', action_route);
app.use('/api/users', userRoutes);
app.use('/api/squads', squadRoutes);

app.listen(3000, () => {
    console.log("Servidor ligado!");
    console.log("Documentação disponível em: http://localhost:3000/api-docs");
});