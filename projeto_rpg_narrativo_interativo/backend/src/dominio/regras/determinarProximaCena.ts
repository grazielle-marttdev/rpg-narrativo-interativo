import { Cena } from "../entidades/Cena";
import { Escolha } from "../entidades/Escolha";
import { Estado } from "../entidades/EstadoJogo";

export function determinarProximaCena(estado: Estado, cenaAtual: Cena, escolha?: Escolha) {
    // 1. Se houve uma escolha manual e ela tem um destino fixo
    if (escolha?.proximaCenaId) {
        return escolha.proximaCenaId;
    }

    // 2. Transições automáticas (Cenas sem escolhas)
    // Se a cena atual tem um próximo passo fixo definido no JSON
    if (cenaAtual.proximaCenaId) {
        return cenaAtual.proximaCenaId;
    }

    // 3. Transições Condicionais (Lógica de Flags/Personalidade)
    // Exemplo: Resolver o encontro com Edrin na fogueira
    if (cenaAtual.id === 'a_fogueira') {
        return estado.flags.ajudouEdrin ? 'cenaAFogueiraAjudouEdrin' : 'cenaAFogueiraRecusouEdrin';
    }

    if (estado.flags.ajudouEdrin) {
        return estado.flags.ajudouEdrin ? 'primeiro_eco_desfecho_ajudou' : 'primeiro_eco_desfecho_recusou';
    }

    return 'cena_erro'; // Fallback de segurança
}