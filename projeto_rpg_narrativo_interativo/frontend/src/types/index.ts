// player.json -- estado do jogador

interface PlayerProfile {
    name: string;                                // nome escolhido pelo jogador
    pronoun: 'ele' | 'ela' | 'elu';              // pronome selecionado 
    pronounPossessive: 'seu' | 'sua' | 'seu';    // possessivo correspondente
}

interface TimerEntry {
    eventId: string;       // ID do evento que será desbloqueado
    endTime: number;       // Date.now() + duração em ms (salvo ao iniciar o timer)
    skippable: boolean;    // se o jogador pode pular o timer
}

interface PlayerState {
    profile: PlayerProfile;          // informações do perfil do jogador
    currentScene: string;            // ID da cena atual
    flags: Record<string, boolean>;  // todas as flags booleanas
    unlockedChats: string[];         // IDs das DMs desbloqueados
    readMessages: string[];          // IDs das mensagens já lidas
    activeTimers: TimerEntry[];      // timers ativos no momento
    lastSaved: number;               // Date.now() do último save
}

// characters.json -- NPCs

interface NPCProfile {
    id: string;
    displayName: string;         // nome exibido no chat
    username: string;            // @username 
    avatarUrl: string;           // caminho para a imagem de perfil
    bio: string;                 // bio do perfil (pode mudar ao longo do jogo)
    isUnlocked: boolean;         // se o chat já está disponível para o jogador
    relationshipScore: number;   // 0-100 -- afeta tom de algumas cenas (pós-MVP)
    post: NPCpost[];             // postagens no perfil
}

interface NPCpost {
    id: string;
    text: string;
    timestamp: string;            // string de data fictícia
    unlockedAfterFlag?: string;   // post só aparece após esta flag ser true
}

// messages.json -- Diálogos

interface Choice {
    text: string;                             // texto da opção exibida ao jogador 
    nextId: string;                           // ID do próximo ChatEnvent a ser carregado
    setFlag?: Record<string, boolean>;        // flags setadas ao escolher esta opção
    requiresFlags?: Record<string, boolean>;  // esta opção só aparece se estas flags forem true
}

interface ChatEvent {
    id: string;                      
    sender: 'npc' | 'player' | 'system';    // quem envia
    npcId?: string;                         // ID do NPC em characters.json (se sender = 'npc')
    text: string;                           // texto da mensagem (pode conter tokens)
    delaysMs: number;                       // delay antes de esta mensagem aparecer (ms)
    typingDurationMs: number;               // duração do indicador "digitando..." antes do texto
    choices?: Choice[];                     // opções de resposta (se houver)
    triggersEventId?: string;               // dispara um evento em events.json após esta mensagem
    isFlash?: boolean;                      // se true, renderiza como tela em vez de chat
}

// events.json -- Motor de Narrativa

interface EventCondition {
    requires?: Record<string, boolean>;  // todas estas flags devem ser true
    // pós-MVP: adicionar 'requiredAny', 'requiresNone' para OR e NOT
}

interface NarrativeEvent {
    id: string;                      
    condition: EventCondition;              // condições de desbloqueio
    triggersScene: string;                  // ID do primeiro ChatEvent a carregar
    setFlags?: Record<string, boolean>;     // flags setadas automaticamente ao disparar
    startsTimer?: {
        durationMs: number;
        skippable: boolean;
        nextEventId: string;                // evento desbloqueado quando o timer expira  
    };
}

// world.json -- Estado do Mundo

interface WorldState {
    currentAct: 1 | 2 | 3 | 4;
    unlockedFeatures: {
        feed: boolean;             // canal de notícias (pós-MVP)
        terminal: boolean;         // interface de terminal (Ato 3)
        nexusSearch: boolean;      // busca de usuários no Nexus
    };
    newsItems: NewsItem[];         // itens do canal de notícias (quando desbloqueado)
}

interface NewsItem {
    id: string;
    headline: string;
    body: string;
    publishedAfterFlag?: string;    // aparece apenas após esta flag
    containsClue: boolean;          // sinaliza ao dev que este item tem pista narrativa
}