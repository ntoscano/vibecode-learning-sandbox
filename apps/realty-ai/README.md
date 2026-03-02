# Realty AI Frontend

> **Note:** This is an advanced example. If you are new to this sandbox, start with the [tictactoe](../tictactoe) app first.

Next.js frontend for the real estate AI application.

## Prerequisites

- Node.js >= 16, pnpm
- Running [`realty-ai-api`](../realty-ai-api) backend

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
pnpm dev        # Start dev server on http://localhost:2024
pnpm build      # Production build
pnpm typecheck  # Type check with tsc
```

## Environment Variables

| Variable                           | Description        | Default                         |
| ---------------------------------- | ------------------ | ------------------------------- |
| `NEXT_PUBLIC_GRAPHQL_URL`          | GraphQL endpoint   | `http://localhost:3001/graphql` |
| `AI_AWS_BEDROCK_ACCESS_KEY_ID`     | AWS access key     |                                 |
| `AI_AWS_BEDROCK_SECRET_ACCESS_KEY` | AWS secret key     |                                 |
| `AI_AWS_BEDROCK_REGION`            | AWS region         |                                 |
| `WEATHERAPI_KEY`                   | WeatherAPI.com key |                                 |
