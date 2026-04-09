import { Pool } from 'pg';
import { env } from '../../config/env';

export const pool = new Pool({
    connectionString: env.databaseUrl,
});

export async function testarConexaoBanco() {
    const client = await pool.connect();

    try {
        await client.query('SELECT 1');
        console.log('Banco conectado com sucesso.');
    } finally {
        client.release();
    }
}