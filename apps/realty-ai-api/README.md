# Realty AI API

> **Note:** This is an advanced example. If you are new to this sandbox, start with the [tictactoe](../tictactoe) + [tictactoe-api](../tictactoe-api) apps first.

NestJS backend for the real estate AI application. Provides REST endpoints, a PostGraphile GraphQL API for read-only queries, and PostgreSQL with pgvector for vector similarity search.

## Prerequisites

- Node.js >= 16, pnpm
- Docker (for PostgreSQL with pgvector)

## Setup

```bash
# From repo root
pnpm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your database credentials

# Start PostgreSQL with pgvector (port 54320)
pnpm docker:up

# Run database migrations
pnpm typeorm:migration:run
```

## Development

```bash
pnpm dev          # Start dev server on http://localhost:3001 (watch mode)
pnpm build        # Production build
pnpm typecheck    # Type check with tsc
```

## Infrastructure

| Service    | Port  | Image                    |
| ---------- | ----- | ------------------------ |
| PostgreSQL | 54320 | ankane/pgvector          |

```bash
pnpm docker:up    # Start containers
pnpm docker:down  # Stop containers
```

## Environment Variables

| Variable              | Description                 | Default      |
| --------------------- | --------------------------- | ------------ |
| `PORT`                | Server port                 | `3001`       |
| `POSTGRES_HOST`       | Database host               | `localhost`  |
| `POSTGRES_PORT`       | Database port               | `54320`      |
| `POSTGRES_USER`       | Database user               |              |
| `POSTGRES_PASSWORD`   | Database password           |              |
| `POSTGRES_DB`         | Database name               | `realty-ai`  |
