import { Escolha } from "./Escolha";

export class Cena {
    id: string;
    texto: string[];
    escolhas: Record<string, Escolha>;
    condicoesDeTransicao?: Record<string, { texto: string[], proximaCenaId: string}>;
    proximaCenaId?: string;

    constructor(id: string, texto: string[], escolhas: Record<string, Escolha>) {
        this.id = id;
        this.texto = texto;
        this.escolhas = escolhas;
    }
}