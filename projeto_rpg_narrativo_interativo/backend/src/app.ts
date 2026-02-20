import express from "express";
import rotas from './infraestrutura/http/rotas';

const app = express();

// Middleware para entender JSON no corpo das requisições (POST)
app.use(express.json());

// Prefixo para todas as rotas de API
app.use('/api', rotas);

export default app;