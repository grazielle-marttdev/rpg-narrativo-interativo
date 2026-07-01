// A MEMÓRIA
// Responsável exclusivamente pela persistência. Encapsula todo o acesso ao LocalStorage
// Expõe apenas as funções saveGameState() e loadGameState()

import type { PlayerState } from "../../types";

const SAVE_KEY = 'espaco_consciencia_save';

// Cria um estado zerado inicial para novos jogadores
export function createInitialState(): PlayerState {
    return {
        profile: {
            name: '',
            pronoun: 'ela',
            pronounPossessive: 'sua',
        },
        currentSceneId: 'cena_1_inicio',
        flags: {},
        lastSaved: Date.now(),
    };
}

// Tenta carregar o save do navegador, se não existir (ou der erro), cria um novo
export function loadGameState(): PlayerState {
    try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (!raw) return createInitialState();
        return JSON.parse(raw) as PlayerState;
    } catch (error) {
        console.error('Save corrompido, iniciando novo jogo', error);
        return createInitialState();
    }
}

// Salva o estado atual no navegador
export function saveGameState(state: PlayerState): void {
    try {
        state.lastSaved = Date.now();
        localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    } catch (error) {
        console.error('Erro ao salvar jogo no localStorage', error);
    }
}