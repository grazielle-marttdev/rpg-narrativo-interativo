// A MEMÓRIA
// Responsável exclusivamente pela persistência. Encapsula todo o acesso ao LocalStorage — nenhuma outra parte do código acessa localStorage diretamente. Expõe apenas as funções saveGameState() e loadGameState(). Gerencia timestamps de timers. Valida a integridade do estado ao carregar (caso o LocalStorage tenha sido corrompido).

import type { TimerEntry, NarrativeEvent, PlayerProfile, PlayerState } from "../../types";

type StartTimerData = NonNullable<NarrativeEvent['startsTimer']>;

function createInitialState(): PlayerState {
    return {
        profile: {
            name: '',
            pronoun: 'ela',
            pronounPossessive: 'sua',
        },
        currentScene: '',
        flags: {},
        unlockedChats: [],
        readMessages: [],
        activeTimers: [],
        lastSaved: Date.now(),
    };
}

function loadGameState(): PlayerState {
    try {
        const raw = localStorage.getItem('fr3q_save');
        if (!raw) return createInitialState();
        return JSON.parse(raw) as PlayerState;
    } catch (error) {
        // JSON corrompido -- resetar para o estado inicial
        console.error('Save corrompido, inciando novo jogo:', error);
        return createInitialState();
    }
}

function saveGameState(state: PlayerState): void {
    try {
        state.lastSaved = Date.now();
        localStorage.setItem('fr3q_save', JSON.stringify(state));
    } catch (error) {
        // LocalStorage cheio ou bloqueado pelo browser
        console.error('Erro ao salvar o jogo:', error);
        // pós-MVP: mostrar aviso para o jogador
    }
}

function setFlag(flagName: string, value: boolean): void {
    const state = loadGameState();
    state.flags[flagName] = value;
    saveGameState(state);
}

function updateProfile(updates: Partial<PlayerProfile>) : void {
    const state = loadGameState();
    state.profile = { ...state.profile, ...updates };

    // Atualizar pronounPossessive automaticamente baseado no pronoun
    if (updates.pronoun) {
        state.profile.pronounPossessive = 
            updates.pronoun === 'ele' ? 'seu' : 'sua';
    }
    saveGameState(state);
}

function startTimer(timer: StartTimerData) : void {
    const state = loadGameState();  // função para carregar o jogo
    const endTime = Date.now() + timer.durationMs; // calcula o timestamp de término

    // adiciona o timer à lista de timers ativos
    state.activeTimers.push({
        eventId: timer.nextEventId, 
        endTime,
        skippable: timer.skippable
    });
    saveGameState(state); 
}

function checkTimers() : string[] {
    // Retorna IDs de eventos cujo timer já expirou
    const state: PlayerState  = loadGameState();
    const now = Date.now();
    const expired: string[] = [];

    state.activeTimers = state.activeTimers.filter((timer: TimerEntry) => {
        if (now >= timer.endTime) {
            expired.push(timer.eventId);
            return false; // remove da lista de ativos
        }
        return true; // mantém na lista de ativos
    });
    saveGameState(state);
    return expired;
}

export { loadGameState, saveGameState, setFlag, updateProfile, startTimer, checkTimers };