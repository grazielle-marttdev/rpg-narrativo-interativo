// ============================================================
// Contrato de dados de toda a aplicação.
// Todos os módulos importam daqui.
// ============================================================


// PLAYER - player.ts

interface PlayerProfile {
    name: string;                        // nome escolhido pelo jogador
    pronoun: 'ele' | 'ela';              // pronome selecionado 
    pronounPossessive: 'seu' | 'sua';    // possessivo correspondente
}

interface PlayerState {
    profile: PlayerProfile;          // informações do perfil do jogador
    currentSceneId: string;          // ID da cena atual
    flags: Record<string, boolean>;  // todas as flags booleanas
    lastSaved: number;               // Timestamp do último save
}

// CHARACTERS - characters.ts

interface Character {
    id: string;
    displayName: string;         
    nomeColor?: string;     // Cor em HEX. Ex: "#123456". Se não tiver, usa cor padrão
}


// STORY - story.ts

interface Choice {
    text: string;                             // texto da opção exibida ao jogador 
    nextId: string;                           // Para qual cena vai ao clicar
    setFlag?: Record<string, boolean>;        // flags setadas ao escolher esta opção
    requiresFlags?: Record<string, boolean>;  // esta opção só aparece se estas flags forem true
}

interface Scene {
    id: string;

    // Narrativa
    text: string;            // O texto vai aparecer com efeito typewriter
    speakerId: string;       // O ID do Character falando. Se vazio, é o Narrador.

    // Mídia (Opcional, só preenche quando for trocar de cena)
    background?: string;     // URL da imagem ou classe CSS/gradiente
    bgm?: string;            // Música de fundo (background music)
    sfx?: string;            // Efeito sonoro pontual 

    // Navegação
    choices?: Choice[];      // Se houver opções
    nextSceneId?: string;    // Se NÃO houver opções, clica pra ir direto pra próxima cena.
}


export type {
    PlayerProfile,
    PlayerState,
    Character,
    Choice,
    Scene
}