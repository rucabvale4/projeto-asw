import express from 'express';
import action_route from './routes/action_route.js';
import userRoutes from './routes/user_route.js';
import squadRoutes from './routes/squad_route.js';

const app = express();
app.use(express.json());

app.use('/api/actions', action_route);
app.use('/api/users', userRoutes);
app.use('/api/squads', squadRoutes);

app.listen(3000, () => console.log("Servidor a correr na porta 3000"));