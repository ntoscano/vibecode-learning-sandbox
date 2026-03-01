# TicTacToe Frontend

Next.js frontend for the TicTacToe game. Supports playing against an AI opponent or player-vs-player via shared links with real-time WebSocket updates.

## Prerequisites

- Node.js >= 16, pnpm
- Running [`tictactoe-api`](../tictactoe-api) backend

## Setup

```bash
# From repo root
pnpm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your values
```

## Development

```bash
pnpm dev        # Start dev server on http://localhost:2025
pnpm build      # Production build
pnpm typecheck  # Type check with tsc
```

## Environment Variables

| Variable                  | Description       | Default                         |
| ------------------------- | ----------------- | ------------------------------- |
| `NEXT_PUBLIC_API_URL`     | REST API base URL | `http://localhost:3002`         |
| `NEXT_PUBLIC_GRAPHQL_URL` | GraphQL endpoint  | `http://localhost:3002/graphql` |
