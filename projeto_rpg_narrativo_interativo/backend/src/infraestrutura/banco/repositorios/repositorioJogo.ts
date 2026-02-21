import fs from 'fs';
import path from 'path';

// O caminho para o arquivo JSON da história
const caminhoHistoria = path.join(__dirname, '../../../dados/historias/historia_corvalle.json');

export function buscarCenaPorId(cenaId: string) {
    // 1. Lendo o arquivo JSON do disco    
    const dadosBrutos = fs.readFileSync(caminhoHistoria, 'utf-8');
    const historia = JSON.parse(dadosBrutos);

    // 2. Procurando a cena dentro do capítulo 1 (ajustar conforme a estrutura do JSON)
    const cenas = historia.capitulo1;

    // Vamos procurar todas as cenas do capítulo
    for (const chave in cenas) {
        if (cenas[chave].id === cenaId) {
            return cenas[chave];
        }
    }

    return null; // Caso não encontre a cena
}