import { Estado } from "../entidades/EstadoJogo";

export function avaliarCondicoes(estado: Estado, condicoes: any) {
    if (!condicoes) return true;

    // Verifica atributos numéricos (ex: coragemMinima: 5)
    if (condicoes.coragemMinima && estado.personalidade.coragem < condicoes.coragemMinima) {
        return false;
    }

    // Verifica se uma flag específica é necessária (ex: precisaFlag: "ajudouEdrin")
    if (condicoes.precisaFlag && !estado.flags[condicoes.precisaFlag]) {
        return false;
    }

    // Se passou por tudo ou não tinha condições específicas, retorna true
    return true;
}
