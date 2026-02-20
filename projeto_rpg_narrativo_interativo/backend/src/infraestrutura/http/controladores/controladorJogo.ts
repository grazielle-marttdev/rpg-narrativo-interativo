import { Request, Response } from 'express';
import { iniciarJogo } from '../../../aplicacao/iniciarJogo';

export function iniciarNovoJogo(req: Request, res: Response) {
    try {
        // Chamando a função criada na camada de aplicação
        const novoEstado = iniciarJogo();

        // Respondendo para o cliente (Frontend) com o estado inicial do jogo
        res.status(201).json(novoEstado);
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao iniciar o jogo" });
    }
}