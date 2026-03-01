# TicTacToe API

NestJS backend for the TicTacToe game. Provides REST endpoints for game management, a PostGraphile GraphQL API for read-only queries, WebSocket support for real-time PvP games, and an AI opponent powered by AWS Bedrock via LangGraph.

## Prerequisites

- Node.js >= 16, pnpm
- Docker (for PostgreSQL and Redis)
- AWS credentials with Bedrock access (for AI opponent)

## Setup

```bash
# From repo root
pnpm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your database credentials and AWS keys

# Start PostgreSQL (port 54322) and Redis (port 6379)
pnpm docker:up

# Run database migrations
pnpm typeorm:migration:run

# Seed the database (optional)
pnpm seed
```

## Development

```bash
pnpm dev          # Start dev server on http://localhost:3002 (watch mode)
pnpm build        # Production build
pnpm typecheck    # Type check with tsc
```

## Infrastructure

| Service    | Port  | Image                   |
| ---------- | ----- | ----------------------- |
| PostgreSQL | 54322 | postgres                |
| Redis      | 6379  | redis                   |

```bash
pnpm docker:up    # Start containers
pnpm docker:down  # Stop containers
```

## Environment Variables

| Variable                          | Description                 | Default              |
| --------------------------------- | --------------------------- | -------------------- |
| `PORT`                            | Server port                 | `3002`               |
| `POSTGRES_HOST`                   | Database host               | `localhost`          |
| `POSTGRES_PORT`                   | Database port               | `54322`              |
| `POSTGRES_USER`                   | Database user               |                      |
| `POSTGRES_PASSWORD`               | Database password           |                      |
| `POSTGRES_DB`                     | Database name               | `tictactoe`          |
| `REDIS_HOST`                      | Redis host                  | `localhost`          |
| `REDIS_PORT`                      | Redis port                  | `6379`               |
| `AI_AWS_BEDROCK_ACCESS_KEY_ID`    | AWS access key              |                      |
| `AI_AWS_BEDROCK_SECRET_ACCESS_KEY`| AWS secret key              |                      |
| `AI_AWS_BEDROCK_REGION`           | AWS region                  | `us-east-1`          |
