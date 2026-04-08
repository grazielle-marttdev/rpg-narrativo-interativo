import express from 'express';
import cors from 'cors';
import rotas from './infraestrutura/http/rotas';
import { env } from './config/env';

const app = express();

app.use(cors({
    origin: env.frontendUrl,
}));

// Middleware para entender JSON no corpo das requisições (POST)
app.use(express.json());

// Prefixo para todas as rotas de API
app.use('/api', rotas);

export default app;