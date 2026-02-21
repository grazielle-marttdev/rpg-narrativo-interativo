import { Request, Response } from 'express';
import { iniciarJogo } from '../../../aplicacao/iniciarJogo';
import { realizarEscolha } from '../../../aplicacao/realizarEscolha';
import { buscarCenaPorId } from '../../banco/repositorios/repositorioJogo';

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

export function escolherOpcao(req: Request, res: Response) {
    try {
        // O Frontend vai enviar o estado atual e a escolha feita no corpo (body) da requisição
        const { estado, cenaId, escolhaId } = req.body;

        // 1. Buscar a cena real do "livro" (JSON)
        const cenaReal = buscarCenaPorId(cenaId);

        if (!cenaReal) {
            return res.status(404).json({ mensagem: "Cena não encontrada!" });
        }

        // 2. Encontrar a escolha específica dentro da cena
        const escolhaReal = cenaReal.escolhas[escolhaId];

        // 3. Processar a lógica
        const novoEstado = realizarEscolha(estado, cenaReal, escolhaReal);

        res.json(novoEstado);
    } catch (erro: any) {
        console.error("ERRO NO CONTROLADOR:", erro.message);
        
        res.status(500).json({ mensagem: "Erro ao processar escolha" });
    }
}