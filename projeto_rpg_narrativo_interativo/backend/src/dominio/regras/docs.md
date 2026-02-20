| Regra                   | Muda quando…                      |
| ----------------------- | --------------------------------- |
| `aplicarEscolha`        | você muda efeitos de escolhas     |
| `avaliarCondicoes`      | você cria caminhos alternativos   |
| `determinarProximaCena` | você cria ramificações narrativas |

---

As **Regras de Domínio** respondem a uma pergunta simples:
“Como o mundo do jogo funciona?”

---

## ```aplicarEscolha.ts```
O jogador escolheu X. Quais mudanças isso causa no estado do personagem?
- Ele **não** troca cena.
- Ele **aplica** consequências (atributos numéricos e flags booleanas).

**Exemplo de lógica:**
```TS
export function aplicarEscolha(estado: Estado, escolha: Escolha) {
    // 1. Atributos (Personalidade)
    for (const atributo in escolha.efeitos) {
        estado.personalidade[atributo] = (estado.personalidade[atributo] || 0) + escolha.efeitos[atributo];
    }

    // 2. Flags (Eventos/Decisões)
    if (escolha.flags) {
        for (const flag in escolha.flags) {
            estado.flags[flag] = escolha.flags[flag];
        }
    }
}
```

## ```avaliarCondicoes.ts```
Responde: “Essa escolha (ou cena) pode aparecer agora?”
- Verifica requisitos de personalidade (ex: coragem > 5).
- Verifica flags (ex: precisa de um item ou decisão anterior).

**Exemplo de lógica:**
```TS
export function avaliarCondicoes(estado: Estado, condicoes: any) {
    if (!condicoes) return true;

    // Bloqueia se não tiver coragem suficiente
    if (condicoes.coragemMinima && estado.personalidade.coragem < condicoes.coragemMinima) {
        return false;
    }

    // Bloqueia se uma decisão/flag não foi tomada
    if (condicoes.precisaFlag && !estado.flags[condicoes.precisaFlag]) {
        return false;
    }

    return true;
}
```

## ```determinarProximaCena.ts``` (Evolução Dinâmica)
Responde: “Qual é a próxima cena?”

Para o RPG crescer, vamos mudar a forma como ele trabalha. Em vez de apenas olhar para a `Escolha`, ele vai olhar para o **Estado** e para a **Cena Atual**.

### Nova Estratégia: Transições Inteligentes
Algumas cenas não têm escolhas (são cenas de transição ou "cutscenes"). O motor do jogo precisa saber para onde ir sozinho.

**Exemplo de Implementação Dinâmica:**
```TS
export function determinarProximaCena(estado: Estado, cenaAtual: Cena, escolha?: Escolha): string {
    // 1. Se houve uma escolha manual e ela tem um destino fixo
    if (escolha?.proximaCenaId) {
        return escolha.proximaCenaId;
    }

    // 2. Transições Automáticas (Cenas sem escolhas)
    // Se a cena atual tem um próximo passo fixo definido no JSON
    if (cenaAtual.proximaCenaId) {
        return cenaAtual.proximaCenaId;
    }

    // 3. Transições Condicionais (Lógica de Flags/Personalidade)
    // Exemplo: Resolver o encontro com Edrin na fogueira
    if (cenaAtual.id === 'a_fogueira') {
        return estado.flags.ajudouEdrin ? 'cenaAFogueiraAjudouEdrin' : 'cenaAFogueiraRecusouEdrin';
    }

    return 'cena_erro'; // Fallback de segurança
}
```

### 💡 Dica para o JSON:
Para evitar código "hardcoded" (nomes de cenas fixos no TS), futuramente podemos colocar as condições de transição direto no JSON da cena:
```json
"proximaCena": {
    "default": "cena_padrao",
    "condicional": [
        { "flag": "ajudouEdrin", "destino": "cena_agradecimento" }
    ]
}
```

### 📌 Por que mudar a assinatura?
Ao passar `cenaAtual: Cena`, a função consegue decidir o destino mesmo que o jogador não tenha clicado em nada (ex: após ler um texto longo de introdução).
