# Vibecode Learning Sandbox

Learn to build real web apps by vibecoding with AI — then understand how they actually work.

## What Is This?

"Vibecoding" means describing what you want to build and letting AI write the code. It is a real and powerful way to create software. But vibecoding alone does not teach you how to code — it teaches you how to describe what you want.

This repo adds the **learning step**. After AI builds your app, you study what it built, understand the concepts behind it, and then build a feature yourself. That is how you go from someone who uses AI to someone who understands software.

**You are a junior developer the moment you clone this repo.**

## Why This Approach Works

What this sandbox teaches looks new, but the core idea is not. Professional software teams have always worked this way: you write a specification — a document that describes exactly what to build — and then someone builds it. That process is called **spec-driven development**.

The only thing that has changed is who writes the code. Instead of handing a spec to a team of developers, you hand it to AI. But the hard part — figuring out what to build, defining the requirements, thinking through edge cases — that is still your job. That is the skill that matters.

When you write a PRD in this sandbox, you are not taking a shortcut. You are practicing the same skill that senior engineers, product managers, and startup founders use every day. Vibecoding is spec-driven development with an AI teammate.

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

## 14-Week Curriculum

Want a structured learning path? We have a **14-week bootcamp curriculum** with 84 lessons that takes you from setting up your tools all the way to building full-stack apps, deploying them, and presenting your portfolio.

Here is what the weeks look like:

| Weeks | Focus                                                                     |
| ----- | ------------------------------------------------------------------------- |
| 1-2   | **Getting Set Up** — VS Code, terminal, Git                               |
| 3-5   | **Foundations** — JavaScript, HTML, CSS, TypeScript                       |
| 6-7   | **Backend** — Node.js, NestJS, databases, APIs                            |
| 8-9   | **Frontend Frameworks** — React, Next.js, state management                |
| 10    | **Security, Auth, and Testing**                                           |
| 11    | **Solo Project Sprint** — build something on your own                     |
| 12-13 | **Collaboration and Advanced Topics** — Git workflows, DevOps, deployment |
| 14    | **Portfolio, Interview Prep, and Capstone**                               |

Each lesson includes an objective, key concepts, and an exercise type (build from scratch, modify existing code, or study and explain).

**How to use it with Claude:** Copy a lesson into Claude Code and ask for exercises. For example:

```
You: "Give me exercises for Week 1, Lesson 1"
You: "I'm working on Week 7, Lesson 4 — can you give me a feature challenge?"
You: "Explain the concepts from Week 4, Lesson 3 using the tictactoe app"
```

Go at your own pace — full-time, part-time, or self-paced. See the full curriculum: **[docs/curriculum.md](docs/curriculum.md)**

## What's Already Here

This repo comes with example apps you can explore and learn from:

| App                                                               | What It Is                                            | Start Here?                           |
| ----------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------- |
| [tictactoe](apps/tictactoe) + [tictactoe-api](apps/tictactoe-api) | A tic-tac-toe game with AI opponent and 2-player mode | Yes — this is the best place to start |
| [dashboard](apps/dashboard)                                       | React dashboard starter template                      | Blank canvas                          |
| [web](apps/web)                                                   | Next.js web app starter template                      | Blank canvas                          |

## Getting Started

### What You Need

- A computer (Mac, Windows, or Linux)
- A code editor — this is where you view and edit your code. We recommend [VS Code](https://code.visualstudio.com/) (free) or [Cursor](https://www.cursor.com/) (free tier available, has built-in AI features)
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) — the AI coding assistant you will work with. Once installed, Claude can help you set up everything else below.
- A [GitHub](https://github.com/) account (free) — this is where your code lives online. Sign up if you don't have one yet.
- [Node.js](https://nodejs.org/) version 16 or higher (download the LTS version)
- [pnpm](https://pnpm.io/) package manager — install it by running `npm install -g pnpm` in your terminal

### Setup

1. Fork this repo — this creates your own copy on GitHub so you can save your work:

   - Make sure you are signed in to [GitHub](https://github.com/)
   - Go to the top of this repo's page and click the **Fork** button (upper right)
   - On the "Create a new fork" page, leave everything as-is and click **Create fork**
   - You now have your own copy at `github.com/YOUR-USERNAME/vibecode-learning-sandbox`

2. Clone your fork — this downloads the code to your computer:

   ```bash
   git clone https://github.com/YOUR-USERNAME/vibecode-learning-sandbox.git
   cd vibecode-learning-sandbox
   ```

   Replace `YOUR-USERNAME` with your actual GitHub username.

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Run the tictactoe app to see it in action:

   ```bash
   cd apps/tictactoe
   pnpm dev
   ```

   Then open http://localhost:2025 in your browser.

5. Open Claude Code in the repo root and choose your path:

   **Option A: Follow the curriculum** — if you want a structured foundation before building, start with the 14-week curriculum. Tell Claude:

   ```
   You: "Give me exercises for Week 1, Lesson 1"
   ```

   See the full curriculum: [docs/curriculum.md](docs/curriculum.md)

   **Option B: Start building** — if you want to jump straight into creating an app, start the learning flow:

   ```
   You: "I want to build an app. Can you help me create a PRD?"
   ```

## Project Structure

```
vibecode-learning-sandbox/
├── apps/                   # All the apps live here
│   ├── tictactoe/          # Tic-tac-toe game (frontend)
│   ├── tictactoe-api/      # Tic-tac-toe game (backend server)
│   ├── dashboard/          # Blank starter (React)
│   └── web/                # Blank starter (Next.js)
├── packages/               # Shared code used by multiple apps
│   ├── tsconfig/           # TypeScript settings
│   └── ui/                 # Shared UI components
├── tasks/                  # PRDs (app blueprints) go here
├── scripts/ralph/          # Ralph — the autonomous coding agent
├── docs/                   # Documentation
│   └── curriculum.md       # 14-week bootcamp curriculum (84 lessons)
└── CLAUDE.md               # Instructions that tell Claude how to help you
```

## For Students

Here is what you can expect from this sandbox:

- **You choose what to build** — follow the [14-week curriculum](docs/curriculum.md) for a guided path, or skip it and build whatever you want. Both work.
- **You always get the right kind of help** — when you ask Claude to build something, it builds. When you ask it to teach you, it teaches. It switches automatically so you never have to think about it.
- **You finish with real things** — every cycle gives you a working app, a learning guide that explains what was built, and a feature you coded yourself. Not just theory.
- **It grows with you** — your first app might be a simple page with a button. A few projects later, you will be building apps with databases and APIs. The sandbox meets you where you are.

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

## Beyond Code — Startups and Career

Learning to code opens two doors: you can build your own thing, or you can get hired to build someone else's. Either way, these resources will help.

### Startups and Entrepreneurship

If you have an idea and want to turn it into a real product, Y Combinator's free resources are the best place to start:

- [Startup School](https://www.startupschool.org/) — YC's free course on founding a startup (7 weeks, 1-2 hrs/week). Covers ideas, MVPs, launching, fundraising, and growth. Taught by YC partners.
- [Startup School Curriculum](https://www.startupschool.org/curriculum) — the full curriculum outline — good to browse even if you don't take the course
- [Should You Start a Startup?](https://www.startupschool.org/curriculum/should-you-start-a-startup) — a good first lesson if you're curious but not sure
- [YC's Essential Startup Advice](https://www.ycombinator.com/library/4D-yc-s-essential-startup-advice) — the core principles YC teaches every batch: launch fast, talk to users, do things that don't scale

### Job Search and Career

If you want to get hired as a developer, start here:

- [Are Junior Devs Screwed?](https://x.com/theo/status/2015877219713941797) — Theo (t3.gg) breaks down the current landscape for junior developers trying to get hired. Honest, data-driven, and practical whether you're hiring or job-hunting.

## Keep Learning

The most important skill you can develop is the ability to teach yourself. It matters more than any single language, framework, or tool. Curiosity and consistency beat credentials every time. These resources are free and open to everyone:

- [MIT OpenCourseWare](https://ocw.mit.edu/) — free lecture notes, videos, and exams from 2,500+ MIT courses. Computer science, math, engineering, and more. No sign-up, no deadlines, completely self-paced.
- [Harvard Free Courses](https://pll.harvard.edu/catalog/free) — 140+ free courses from Harvard covering programming, data science, business, and beyond.
- [Girls Who Code](https://girlswhocode.com/) — free coding programs for high school students, including a summer Pathways program. No prior experience needed.
