---
name: feature-challenge
description: 'Generate a guided coding exercise for the student to implement manually. Use when the student is ready to write code themselves. Triggers on: feature challenge, give me an exercise, what should I build, own it, I want to code, manual challenge.'
---

# Feature Challenge Generator

**Learning Flow Step 4: Own It**

Generates a guided, scaffolded coding exercise that the student implements themselves. Claude acts as tutor during the challenge — giving hints and asking questions, but never writing the solution.

---

## The Job

1. Identify the target app (ask the student if ambiguous)
2. Assess the student's experience level
3. Generate an appropriately scoped challenge
4. Save to `tasks/challenges/challenge-[app-name]-[feature].md`
5. Switch to **Learning Mode** for the duration of the challenge

---

## Step 1: Identify Target App

Ask the student which app they want to add a feature to. If they just completed a vibecoding cycle, default to the app that was just built.

## Step 2: Assess Level

Ask one question:
> "How comfortable are you with this codebase? Pick one:"
> - **Beginner** — I have not written code before, or this is my first time looking at this project
> - **Intermediate** — I have written some code and understand the basics (variables, functions, HTML)
> - **Advanced** — I am comfortable reading and modifying code, and I want a real challenge

## Step 3: Generate the Challenge

### Challenge Document Structure

```markdown
# Feature Challenge: [Feature Name]

## What You Will Build
[1-2 sentences describing the feature in plain English]

## What You Will Learn
[List 2-3 specific concepts this challenge teaches]

## Difficulty: [Beginner / Intermediate / Advanced]

## Before You Start
- [ ] Make sure the app runs locally (`pnpm dev` from the app directory)
- [ ] Open [specific file] in your editor and read lines [X-Y]
- [ ] Understand what the current code does (ask Claude `/concept-explainer` if unsure)

## Steps

### Step 1: [Specific, small instruction]
**File to edit:** `[exact path]`
**What to do:** [Clear description of the change]
**Hint:** [A nudge in the right direction — NOT the answer]
**Concept:** [What this step teaches]

### Step 2: [Next instruction]
...

(Continue for 3-6 steps depending on difficulty)

## How to Check Your Work
- [ ] The app still runs without errors
- [ ] [Specific visual or behavioral check]
- [ ] [Another check]

## Stuck?
Tell Claude: "I am stuck on Step [N] of my feature challenge. Can you give me a hint?"
Claude will guide you without giving the answer.

## Bonus (Optional)
[A stretch goal for students who finish early]
```

---

## Challenge Scoping by Level

### Beginner Challenges (1-3 steps)
Focus on: HTML structure, CSS/Tailwind styling, visible UI changes

**Examples for tictactoe:**
- Change the colors of X and O using Tailwind classes
- Add a move counter that shows how many moves have been played
- Change the game status message text and styling

**What makes it beginner:** One file to edit, changes are immediately visible, no logic changes required.

### Intermediate Challenges (3-5 steps)
Focus on: React state, event handling, component composition, simple logic

**Examples for tictactoe:**
- Add a dark mode toggle (state + conditional Tailwind classes)
- Show a "game over" overlay instead of inline text (new component + conditional rendering)
- Add a player name display above the board (props + state)

**What makes it intermediate:** May touch 2 files, requires understanding of state or props, involves simple logic.

### Advanced Challenges (4-6 steps)
Focus on: API integration, multi-component coordination, data persistence

**Examples for tictactoe:**
- Add an undo button (state history pattern, API call)
- Add player name input that persists across games (form handling + API or localStorage)
- Add a win streak counter with a leaderboard display (new component + data aggregation)

**What makes it advanced:** Touches frontend and backend, requires understanding data flow, involves creating new patterns.

---

## Rules During the Challenge

Once the challenge is generated, switch to **Learning Mode**:
- Do NOT write the solution code
- If the student shares code, review it and point out specific issues
- If they are stuck, give ONE hint at a time — not the full answer
- Celebrate each step they complete
- If they get frustrated, validate that coding is hard and suggest taking a break or re-reading the relevant concept

---

## Checklist Before Saving

- [ ] Challenge is scoped appropriately for the stated difficulty level
- [ ] Every step specifies the exact file to edit
- [ ] Hints guide without revealing the answer
- [ ] "How to Check Your Work" section has concrete checks
- [ ] Saved to `tasks/challenges/challenge-[app-name]-[feature].md`
