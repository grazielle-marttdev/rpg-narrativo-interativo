| Arquivo                  | Serve para                                 |
| ------------------------ | ------------------------------------------ |
| `historia_corvalle.json` | Guardar a narrativa                        |
| `Cena.ts`                | Definir o que é uma cena para o sistema    |
| `Escolha.ts`             | Definir o que é uma escolha para o sistema |
| `EstadoJogo.ts`          | Guardar o progresso do jogador             |


---

## O que é ```historia_corvalle.json```

Ele é:
- 📦 dados brutos
- ✍️ narrativa
- 🎭 conteúdo

Exemplo:
```JSON
{
  "id": "inicio",
  "texto": "Você acorda na aldeia...",
  "escolhas": [
    {
      "id": "falar_com_ferreiro",
      "texto": "Falar com o ferreiro",
      "efeitos": { "coragem": 1 },
      "proximaCena": "ferreiro"
    }
  ]
}
```

**O JSON:**
- não valida nada
- não impede erros
- não sabe aplicar regras
- não sabe se está completo ou errado

Ele apenas existe.

---
## O papel de ```Cena.ts```

```Cena.ts``` não guarda a história.

Ele define o que o sistema entende como uma cena.

**Exemplo mental:**

Para o sistema, uma cena sempre tem:
- um id
- um texto
- uma lista de escolhas válidas”

**Exemplo simples:**
```TS
export class Cena {
  id: string;
  texto: string;
  escolhas: Escolha[];

  constructor(id: string, texto: string, escolhas: Escolha[]) {
    this.id = id;
    this.texto = texto;
    this.escolhas = escolhas;
  }
}
```

### Agora o código pode:
- confiar que toda cena tem essas partes
- trabalhar com cenas de forma consistente
- evitar undefined, campos faltando, etc.

---

## O papel de ```Escolha.ts```

Mesma ideia.

Ela define o que é uma escolha para o sistema, não para o autor da história.

```TS
export class Escolha {
  id: string;
  texto: string;
  efeitos: Record<string, number>;
  proximaCenaId: string;
}
```

**Isso permite:**
- aplicar efeitos corretamente
- calcular personalidade
- decidir a próxima cena

Sem isso, o código ficaria cheio de:

```if (escolha && escolha.efeitos && escolha.efeitos.coragem) { ... }```

--- 

## O fluxo do código

O JSON entra, mas não governa o sistema diretamente:

```
historia_corvalle.json
        ↓
carregador de história
        ↓
transforma em
        ↓
Cena (entidade)
Escolha (entidade)
        ↓
regras do domínio operam
```

**Ou seja:**
- JSON → dados
- Entidades → lógica

--- 

## E o EstadoJogo.ts?

Ele é outro tipo de coisa.
- ```Cena``` e ```Escolha``` são imutáveis (conteúdo)
- ```EstadoJogo``` é mutável (progresso do jogador)

Exemplo:

```TS
export class EstadoJogo {
  cenaAtualId: string;
  personalidade: Record<string, number>;
  flags: Record<string, boolean>;
}
```

O JSON nunca muda.

O estado muda o tempo todo.