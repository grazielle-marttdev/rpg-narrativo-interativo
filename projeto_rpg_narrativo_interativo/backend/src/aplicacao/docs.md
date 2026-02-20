| Arquivo              | Pergunta que ele responde                       |
| -------------------- | ----------------------------------------------- |
| `iniciarJogo.ts`     | “Como começa um jogo?”                          |
| `realizarEscolha.ts` | “O que acontece quando o jogador escolhe algo?” |
| `carregarJogo.ts`    | “Como continuar um jogo salvo?”                 |

---
--

A **Camada de Aplicação** é onde ficam os **casos de uso do sistema**.

- Caso de uso = **algo que o jogador pode fazer**
- (iniciar jogo, fazer uma escolha, carregar progresso)

---
- Ela **não é interface**, **não é banco**, **não é narrativa**.
- Ela é a orquestra que diz em que ordem as coisas acontecem.

### Regra de ouro
- **Domínio** → *o que é permitido*
- **Aplicação** → *quando e como isso acontece*
- **Infraestrutura** → *como chega/sai do sistema*

---

## ```iniciarJogo.ts```
O que ele representa 

“O jogador quer começar um novo jogo.”

- Esse arquivo **não mostra texto**, **não salva em banco** e **não sabe HTTP**.
- Ele apenas **cria um estado inicial válido**.

### Responsabilidades reais
- Criar um EstadoJogo
- Definir a cena inicial
- Inicializar personalidade e variáveis

**Exemplo simples:**
```TS
import { EstadoJogo } from '../dominio/entidades/EstadoJogo';

export function iniciarJogo() {
  const estadoInicial = new EstadoJogo(
    'o_vale_desperta', // cena inicial
    { coragem: 0, empatia: 0 },
    {}
  );

  return estadoInicial;
}
```

### 📌 Note:
- Ele **não carrega JSON**
- Ele **não salva**
- Ele **não decide regra complexa**
- Ele só cria um estado válido

--- 

## ```realizarEscolha.ts```

Esse é o coração do loop do jogo.

O que ele representa

“O jogador fez uma escolha. O que acontece agora?”

### Por que ele existe?

Porque uma escolha não é só trocar de cena.

**Ela envolve:**
- aplicar efeitos
- avaliar regras
- atualizar estado
- decidir próxima cena

Tudo isso em ordem correta.

### Fluxo interno 
1. Receber o estado atual
2. Receber a escolha feita
3. Aplicar efeitos da escolha
4. Calcular qual é a próxima cena
5. Atualizar o estado
6. Retornar o novo estado

**Exemplo simplificado:**
```TS
import { aplicarEscolha } from '../dominio/regras/aplicarEscolha';
import { determinarProximaCena } from '../dominio/regras/determinarProximaCena';

export function realizarEscolha(estadoAtual, escolha) {
  aplicarEscolha(estadoAtual, escolha);

  const proximaCenaId = determinarProximaCena(escolha);
  estadoAtual.cenaAtualId = proximaCenaId;

  return estadoAtual;
}
```

### 📌 Repare:
- Ele **não sabe HTTP**
- Ele **não sabe React**
- Ele **não sabe banco**
- Ele apenas coordena regras

---

## ```carregarJogo.ts```
O que ele representa

“O jogador quer continuar de onde parou.”

### Responsabilidade real
- Buscar estado salvo
- Validar se é um estado válido
- Devolver para o sistema

**Exemplo simples:**
```TS
import { repositorioJogo } from '../infraestrutura/banco/repositorios/repositorioJogo';

export async function carregarJogo(usuarioId) {
  const estadoSalvo = await repositorioJogo.buscarPorUsuario(usuarioId);
  return estadoSalvo;
}
```

### 📌 Importante:
- Ele **não decide regra**
- Ele **não aplica escolha**
- Ele **apenas recupera o estado**