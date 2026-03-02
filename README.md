# Vibecode Learning Sandbox

Learn to build real web apps by vibecoding with AI — then understand how they actually work.

## What Is This?

"Vibecoding" means describing what you want to build and letting AI write the code. It is a real and powerful way to create software. But vibecoding alone does not teach you how to code — it teaches you how to describe what you want.

This repo adds the **learning step**. After AI builds your app, you study what it built, understand the concepts behind it, and then build a feature yourself. That is how you go from someone who uses AI to someone who understands software.

**You are a junior developer the moment you clone this repo.**

## How It Works

### Step 1: Dream It
Describe the app you want to build. You work with Claude to create a PRD (Product Requirements Document) — a blueprint that describes exactly what the app should do.

```
You: "I want to build a quiz app where I can create questions and test myself"
Claude: *asks clarifying questions, then generates a PRD*
```

### Step 2: Vibe It
Claude reads the blueprint and writes all the code. This is the vibecoding part — you watch a real app come to life from your description.

### Step 3: Study It
Now the learning starts. Claude generates a **postmortem** — a guide that walks you through everything that was built and explains the concepts: HTML, CSS, JavaScript, React, APIs, databases, and more. Each concept is tied to actual code in your project.

### Step 4: Own It
Claude generates a **feature challenge** — a guided exercise where YOU write the code to add a new feature to the app. Claude acts as your tutor: giving hints and asking questions, but never writing the code for you.

Then you go back to Step 1 with a new project. Each time around, you understand more.

## What's Already Here

This repo comes with example apps you can explore and learn from:

| App | What It Is | Start Here? |
|-----|-----------|-------------|
| [tictactoe](apps/tictactoe) + [tictactoe-api](apps/tictactoe-api) | A tic-tac-toe game with AI opponent and 2-player mode | Yes — this is the best place to start |
| [realty-ai](apps/realty-ai) + [realty-ai-api](apps/realty-ai-api) | AI-powered real estate email generator | Advanced example |
| [dashboard](apps/dashboard) | React dashboard starter template | Blank canvas |
| [web](apps/web) | Next.js web app starter template | Blank canvas |

## Getting Started

### What You Need

- A computer (Mac, Windows, or Linux)
- [Node.js](https://nodejs.org/) version 16 or higher (download the LTS version)
- [pnpm](https://pnpm.io/) package manager — install it by running `npm install -g pnpm` in your terminal
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) — the AI coding assistant you will work with

### Setup

1. Clone this repo:
   ```bash
   git clone <repo-url>
   cd vibecode-learning-sandbox
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the tictactoe app to see it in action:
   ```bash
   cd apps/tictactoe
   pnpm dev
   ```
   Then open http://localhost:2025 in your browser.

4. Open Claude Code in the repo root and start the learning flow:
   ```
   You: "I want to build an app. Can you help me create a PRD?"
   ```

## Project Structure

```
vibecode-learning-sandbox/
├── apps/                   # All the apps live here
│   ├── tictactoe/          # Tic-tac-toe game (frontend)
│   ├── tictactoe-api/      # Tic-tac-toe game (backend server)
│   ├── realty-ai/          # Real estate AI app (frontend)
│   ├── realty-ai-api/      # Real estate AI app (backend server)
│   ├── dashboard/          # Blank starter (React)
│   └── web/                # Blank starter (Next.js)
├── packages/               # Shared code used by multiple apps
│   ├── tsconfig/           # TypeScript settings
│   └── ui/                 # Shared UI components
├── tasks/                  # PRDs (app blueprints) go here
├── scripts/ralph/          # Ralph — the autonomous coding agent
├── docs/                   # Documentation
└── CLAUDE.md               # Instructions that tell Claude how to help you
```

## For Educators

This sandbox is designed for self-directed learning, but it works in classroom settings too:

- **No curriculum required** — students choose what to build, and the learning emerges from the concepts used
- **Built-in guardrails** — Claude switches between "builder" mode and "tutor" mode automatically, so students get the right kind of help at the right time
- **Tangible output** — students end each cycle with a working app they built (vibecoded), a learning guide they studied, and a feature they coded themselves
- **Progressive complexity** — a student's first app might use basic HTML and JavaScript; their fifth might use databases and APIs. The sandbox scales with them

## Tech Stack

For the curious — here is what powers this monorepo:

- **pnpm** — package manager (like npm, but faster)
- **Turbo** — runs builds and dev servers across all apps
- **TypeScript** — JavaScript with type safety
- **Next.js** — React framework for frontend apps
- **NestJS** — Node.js framework for backend APIs
- **Tailwind CSS** — utility-based styling
- **PostgreSQL** — database
- **ESLint + Prettier** — keeps code clean and consistent
