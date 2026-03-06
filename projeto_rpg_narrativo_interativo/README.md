# Projeto RPG Narrativo Interativo

Aplicacao web com frontend em React (Vite + TypeScript) e backend em Node.js (Express + TypeScript).

## Status do projeto

Projeto em desenvolvimento.

No estado atual, a interface funcional do frontend possui somente a tela de inicializacao (`TelaInicializacao`).
As outras telas (`Menu`, `Jogo`, `Login` e `Registro`) ainda nao foram implementadas.

Observacao: ao clicar em **Acessar Nucleo**, o fluxo principal do jogo ainda nao continua (integracao pendente).

## Pre-requisitos

- Node.js 20+ (recomendado)
- npm 10+ (normalmente ja vem com o Node.js)

## Estrutura do projeto

- `frontend/`: interface do jogo
- `backend/`: API do jogo

## Como rodar localmente

1. Instale as dependencias do backend:

```bash
cd backend
npm install
```

2. Instale as dependencias do frontend:

```bash
cd ../frontend
npm install
```

3. Inicie o backend (em um terminal):

```bash
cd backend
npm run dev
```
Backend disponivel em: `http://localhost:3001`

4. Inicie o frontend (em outro terminal):

```bash
cd frontend
npm run dev
```

Frontend disponivel em: `http://localhost:5173`

## Build de producao (opcional)

### Backend

```bash
cd backend
npm run build
```

### Frontend

```bash
cd frontend
npm run build
```

## Scripts disponiveis

### Backend (`backend/package.json`)

- `npm run dev`: roda o servidor com `ts-node`
- `npm run build`: compila TypeScript para JavaScript

### Frontend (`frontend/package.json`)

- `npm run dev`: sobe o Vite em modo desenvolvimento
- `npm run build`: gera build de producao
- `npm run preview`: executa preview do build
- `npm run lint`: roda o ESLint
