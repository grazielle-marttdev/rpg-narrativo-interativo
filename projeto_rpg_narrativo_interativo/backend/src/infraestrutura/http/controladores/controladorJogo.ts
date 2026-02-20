import { Request, Response } from 'express';
import { iniciarJogo } from '../../../aplicacao/iniciarJogo';
import { realizarEscolha } from '../../../aplicacao/realizarEscolha';

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
        const { estado, cena, escolha } = req.body;

        // Validar se os dados chegaram
        if (!estado || !cena || !escolha) {
            return res.status(400).json({ mensagem: "Dados incompletos para realizar escolha" });
        }

        // Chamar a lógica criada na pasta aplicação
        const novoEstado = realizarEscolha(estado, cena, escolha);

        // Retornar o novo estado para o jogador
        res.status(200).json(novoEstado);
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao processar escolha" });
    }
}