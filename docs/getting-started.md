# Getting Started

This guide walks you through everything you need to set up the Vibecode Learning Sandbox on your computer. No prior experience required.

---

## Step 1: Open Your Terminal

A terminal (also called "command line") is a text-based way to talk to your computer. Instead of clicking icons, you type commands.

**How to open it:** Press `` Ctrl + ` `` in your IDE (VS Code, Cursor, etc.) to toggle the built-in terminal. The `` ` `` key is the backtick — it is the same key as `~` (tilde), located in the top-left of your keyboard, below `Esc`.

If you are not using an IDE, you can also open a standalone terminal:
- **Mac:** Press `Cmd + Space`, type "Terminal", hit Enter
- **Windows:** Search for "PowerShell" in the Start menu
- **Linux:** Press `Ctrl + Alt + T`

You will see a blinking cursor waiting for you to type. That is your terminal.

---

## Step 2: Install Node.js

Node.js lets your computer run JavaScript outside of a web browser. Most of the tools in this sandbox need it.

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version (the one on the left — LTS means "Long Term Support," which means it is stable)
3. Run the installer and follow the prompts (the defaults are fine)
4. Verify it worked by typing this in your terminal:

```bash
node --version
```

You should see something like `v20.x.x` or `v22.x.x`. Any version 16 or higher works.

---

## Step 3: Install pnpm

pnpm is a "package manager" — it downloads and organizes all the code libraries that your projects depend on. Think of it as an app store for code.

Type this in your terminal:

```bash
npm install -g pnpm
```

What that command means:
- `npm` — the package manager that came with Node.js
- `install` — download and install something
- `-g` — install it "globally" (available everywhere on your computer, not just one project)
- `pnpm` — the name of what we are installing

Verify it worked:

```bash
pnpm --version
```

---

## Step 4: Install Claude Code

Claude Code is the AI coding assistant you will work with throughout this sandbox.

Follow the official setup guide: [https://docs.anthropic.com/en/docs/claude-code](https://docs.anthropic.com/en/docs/claude-code)

Once installed, verify it works:

```bash
claude --version
```

---

## Step 5: Clone This Repo

"Cloning" means downloading a copy of this project to your computer using Git (a tool that tracks changes to code).

```bash
git clone <repo-url>
cd vibecode-learning-sandbox
```

What those commands do:
- `git clone <url>` — downloads the entire project
- `cd vibecode-learning-sandbox` — moves you into the project folder ("cd" stands for "change directory")

---

## Step 6: Install Dependencies

Dependencies are code libraries that the apps in this project need to run. One command installs everything:

```bash
pnpm install
```

This might take a minute or two. You will see a progress bar and a lot of text — that is normal.

---

## Step 7: Run the TicTacToe App

Let's make sure everything works by running the example app:

```bash
cd apps/tictactoe
pnpm dev
```

You should see output that includes something like:

```
▲ Next.js 14.x.x
- Local: http://localhost:2025
```

Open your browser and go to **http://localhost:2025**. You should see a tic-tac-toe game board.

To stop the app, go back to your terminal and press `Ctrl + C`.

To get back to the main project folder:

```bash
cd ../..
```

---

## Step 8: Your First Conversation with Claude

Now for the fun part. From the project root folder, start Claude Code:

```bash
claude
```

Here are some things to try:

**Start the learning flow:**
> "I want to build an app. Can you help me create a PRD?"

**Study the example app:**
> "Run a postmortem on the tictactoe app"

**Learn a concept:**
> "Explain what a React component is"

**Get a coding exercise:**
> "Give me a feature challenge for the tictactoe app"

---

## Troubleshooting

### "command not found: node" or "command not found: pnpm"
Node.js or pnpm is not installed, or your terminal does not know where to find it. Try closing and reopening your terminal, then run the install commands again.

### "command not found: git"
Git is not installed. Download it from [https://git-scm.com](https://git-scm.com) and install it.

### "Port 2025 is already in use"
Something else is already running on that port. Either stop the other program, or you can look in the app's configuration to use a different port.

### "pnpm install" shows errors
Make sure you are in the `vibecode-learning-sandbox` root folder (not inside an app subfolder). Try running `pnpm install` again — sometimes network hiccups cause failures on the first try.

### The app starts but the page is blank
Try a different browser, or clear your browser cache. Make sure you are going to `http://localhost:2025` (not https).

---

## What's Next?

Head to [Learning Flow](./learning-flow.md) to understand the 4-step cycle, or jump straight in and start talking to Claude.
