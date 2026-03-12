# Getting Started

This guide walks you through everything you need to set up the Vibecode Learning Sandbox on your computer. No prior experience required.

> **Already have Claude Code running?** You can ask it to help you through these steps! Just say: "Help me set up this project."

---

## Step 1: Install a Code Editor

A code editor is where you view and edit code. It is like a word processor, but for programming. Download one of these (both are free):

- [VS Code](https://code.visualstudio.com/) — the most popular code editor for developers
- [Cursor](https://www.cursor.com/) — a code editor with built-in AI features

Run the installer and open the app when it is done.

---

## Step 2: Open Your Terminal

A terminal (also called "command line") is a text-based way to talk to your computer. Instead of clicking icons, you type commands.

**How to open it:** Press `` Ctrl + ` `` in your code editor to open the built-in terminal. The `` ` `` key is the backtick — it is the same key as `~` (tilde), located in the top-left of your keyboard, below `Esc`.

> **On Mac:** use `` Cmd + ` `` or `` Ctrl + ` `` depending on your editor.

If you are not using a code editor yet, you can also open a standalone terminal:

- **Mac:** Press `Cmd + Space`, type "Terminal", hit Enter
- **Windows:** Search for "PowerShell" in the Start menu
- **Linux:** Press `Ctrl + Alt + T`

You will see a blinking cursor waiting for you to type. That is your terminal.

---

## Step 3: Install Claude Code

Claude Code is an AI coding assistant that works directly on your computer. It can read your files, run commands, and build things for you. It is the tool that powers this entire sandbox, and once you have it running it can help you install everything else.

1. Create an account at [console.anthropic.com](https://console.anthropic.com)
2. Follow the official setup guide: [Claude Code installation](https://docs.anthropic.com/en/docs/claude-code/overview)

Once installed, verify it works by typing this in your terminal:

```bash
claude --version
```

> **What about other AI tools?** Claude Code is special because it works directly on your computer — it can read your files, run commands, and build things for you. Other AI chats like [ChatGPT](https://chatgpt.com) and [Gemini](https://gemini.google.com) are great for answering questions and explaining concepts, but they cannot do the work on your machine. Use whatever helps you learn, but Claude Code is what powers this sandbox.

---

## Step 4: Install Git

Git is a tool that tracks changes to your code over time, like a save system for your projects. You also need it to download this project.

1. Check if you already have it — type this in your terminal:

```bash
git --version
```

If you see a version number (like `git version 2.x.x`), you are good — skip to the next step.

2. If you see "command not found," download and install Git:
   - Go to [https://git-scm.com](https://git-scm.com)
   - Download the installer for your operating system
   - Run the installer and follow the prompts (the defaults are fine)
   - **Windows users:** when the installer asks about "Adjusting your PATH," keep the recommended option
   - Close and reopen your terminal, then try `git --version` again

---

## Step 5: Install Node.js

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

## Step 6: Install pnpm

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

## Step 7: Fork and Clone This Repo

"Forking" creates your own copy of this project on GitHub. "Cloning" downloads that copy to your computer.

1. Make sure you have a [GitHub](https://github.com/) account (free). Sign up if you don't have one.

2. Go to the top of this repo's page on GitHub and click the **Fork** button (upper right). On the "Create a new fork" page, leave everything as-is and click **Create fork**.

3. Clone your fork — this downloads the code to your computer:

```bash
git clone https://github.com/YOUR-USERNAME/vibecode-learning-sandbox.git
cd vibecode-learning-sandbox
```

What those commands do:

- `git clone <url>` — downloads the entire project
- `cd vibecode-learning-sandbox` — moves you into the project folder ("cd" stands for "change directory")

Replace `YOUR-USERNAME` with your actual GitHub username.

---

## Step 8: Install Dependencies

Dependencies are code libraries that the apps in this project need to run. One command installs everything:

```bash
pnpm install
```

This might take a minute or two. You will see a progress bar and a lot of text — that is normal.

---

## Step 9: Run the TicTacToe App

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

## Step 10: Your First Conversation with Claude

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

### "command not found: claude"

Claude Code is not installed. Go back to Step 3 and follow the installation guide.

### "command not found: git"

Git is not installed. Go back to Step 4 and follow the installation instructions.

### "command not found: node" or "command not found: pnpm"

Node.js or pnpm is not installed, or your terminal does not know where to find it. Try closing and reopening your terminal, then run the install commands again (Steps 5-6).

### "Port 2025 is already in use"

Something else is already running on that port. Either stop the other program, or you can look in the app's configuration to use a different port.

### "pnpm install" shows errors

Make sure you are in the `vibecode-learning-sandbox` root folder (not inside an app subfolder). Try running `pnpm install` again — sometimes network hiccups cause failures on the first try.

### The app starts but the page is blank

Try a different browser, or clear your browser cache. Make sure you are going to `http://localhost:2025` (not https).

---

## What's Next?

Head to [Learning Flow](./learning-flow.md) to understand the 4-step cycle, or jump straight in and start talking to Claude.
