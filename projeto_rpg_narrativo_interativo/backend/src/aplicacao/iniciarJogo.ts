import { Estado } from '../dominio/entidades/EstadoJogo'

export function iniciarJogo() {
    const estadoInicial = new Estado(
        'o_vale_desperta', 
        { "coragem": 3, "curiosidade": 2, "empatia": 5,  "impulsividade": 0, "racionalidade": 0 },
        {}
    );

    return estadoInicial;
}