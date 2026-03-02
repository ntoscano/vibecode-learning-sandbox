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

## What You Can Learn From This App

This frontend is a great place to start understanding how modern web apps work:

- **React Components** — The UI is built from reusable pieces (Board, Cell, GameStatus, NewGameButton). See how they compose together in `src/app/page.tsx`.
- **State Management** — Uses React's `useState` and `useEffect` hooks to track game data and update the screen when things change.
- **Tailwind CSS** — Styling is done with utility classes directly in the HTML, no separate CSS files. Look at any component to see how layout and colors work.
- **Next.js Routing** — Different pages (`/`, `/x`, `/o`) are handled by the file-based routing system.
- **API Communication** — The frontend talks to the backend server using HTTP requests. See `src/lib/api/gameApi.ts` for how data flows between frontend and backend.
- **Real-Time Updates** — WebSocket connections allow the game to update instantly when the other player moves in PvP mode.
