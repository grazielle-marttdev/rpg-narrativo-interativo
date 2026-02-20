export interface Escolha {
    id: string;
    texto: string;
    efeitos: Record<string, number>;
    flags?: Record<string, boolean>;
    proximaCenaId: string;
}