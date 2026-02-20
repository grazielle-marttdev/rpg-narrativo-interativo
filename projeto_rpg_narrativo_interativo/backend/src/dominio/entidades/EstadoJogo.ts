export class Estado {
    cenaAtualId: string;
    personalidade: { coragem: number; empatia: number; [key: string]: number; };
    flags: Record<string, boolean>;

    constructor(cenaAtualId: string, personalidade: { coragem: number; empatia: number; [key: string]: number; }, flags: Record<string, boolean>) {
        this.cenaAtualId = cenaAtualId;
        this.personalidade = personalidade;
        this.flags = flags;
    }
}
