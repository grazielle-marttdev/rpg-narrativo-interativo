import express from 'express';

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend do RPG Narrativo rodando');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});