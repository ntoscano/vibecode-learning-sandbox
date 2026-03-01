# AI Sandbox

A monorepo of full-stack applications built as a sandbox for job search preparation. Each project explores different patterns in AI integration, real-time systems, and modern web development.

## Apps

| App                                   | Description             | Stack                                    | Port |
| ------------------------------------- | ----------------------- | ---------------------------------------- | ---- |
| [`tictactoe`](apps/tictactoe)         | TicTacToe game frontend | Next.js 14, React 18, Tailwind CSS       | 2025 |
| [`tictactoe-api`](apps/tictactoe-api) | TicTacToe game backend  | NestJS 10, TypeORM, PostgreSQL, Redis    | 3002 |
| [`realty-ai`](apps/realty-ai)         | Real estate AI frontend | Next.js 14, React 18, Tailwind CSS       | 2024 |
| [`realty-ai-api`](apps/realty-ai-api) | Real estate AI backend  | NestJS 8, TypeORM, PostgreSQL (pgvector) | 3001 |
| [`dashboard`](apps/dashboard)         | Dashboard app           | React 18, Webpack 5                      | 2022 |
| [`web`](apps/web)                     | Web app                 | Next.js 13, React 18                     | 2023 |

## Quick Start

### Prerequisites

- Node.js >= 16
- [pnpm](https://pnpm.io/) 10.x
- [Docker](https://www.docker.com/) (for databases)

### Install

```bash
pnpm install
```

### Run All Apps

```bash
pnpm dev
```

Or start individual apps — see each app's README for setup instructions.

## Monorepo Structure

```
apps/
  tictactoe/          # Next.js frontend
  tictactoe-api/      # NestJS backend (PostgreSQL + Redis)
  realty-ai/          # Next.js frontend
  realty-ai-api/      # NestJS backend (PostgreSQL + pgvector)
  dashboard/          # React + Webpack frontend
  web/                # Next.js frontend
packages/
  tsconfig/           # Shared TypeScript configs
  ui/                 # Shared React component library
```

## Tooling

- **pnpm** workspaces for dependency management
- **Turbo** for build orchestration and caching
- **ESLint** + **Prettier** for code quality
- **Husky** + **lint-staged** for pre-commit hooks
- **Changesets** for version management
