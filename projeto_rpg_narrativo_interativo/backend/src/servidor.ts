import app from './app';
import { env } from './config/env';
import { testarConexaoBanco } from './infraestrutura/banco/conexao';

async function iniciarServidor() {
    try {
        await testarConexaoBanco();

        app.listen(env.port, () => {
            console.log(`⚔️ Servidor do RPG rodando em http://localhost:${env.port}`);
        });
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}

iniciarServidor();