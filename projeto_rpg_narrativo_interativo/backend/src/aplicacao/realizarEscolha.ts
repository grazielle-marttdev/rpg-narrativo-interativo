import { Cena } from '../dominio/entidades/Cena';
import { Escolha } from '../dominio/entidades/Escolha';
import { Estado } from '../dominio/entidades/EstadoJogo';
import { aplicarEscolha } from '../dominio/regras/aplicarEscolha';
import { determinarProximaCena } from '../dominio/regras/determinarProximaCena';

export function realizarEscolha(estadoAtual: Estado, cenaAtual: Cena, escolha: Escolha) {
    aplicarEscolha(estadoAtual, escolha);

    const proximaCenaId = determinarProximaCena(estadoAtual, cenaAtual, escolha);
    estadoAtual.cenaAtualId = proximaCenaId;

    return estadoAtual;
}
