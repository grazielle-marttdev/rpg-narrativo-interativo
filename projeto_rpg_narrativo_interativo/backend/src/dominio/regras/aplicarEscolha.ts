import { Escolha } from "../entidades/Escolha";
import { Estado } from "../entidades/EstadoJogo";

export function aplicarEscolha(estado: Estado, escolha: Escolha) {
    for (const atributo in escolha.efeitos) {
        estado.personalidade[atributo] = 
            (estado.personalidade[atributo] || 0) + escolha.efeitos[atributo];
    }

    // Aplica as flags (booleans)
    if (escolha.flags) {
        for (const flag in escolha.flags) {
            estado.flags[flag] = escolha.flags[flag];
        }
    }
}