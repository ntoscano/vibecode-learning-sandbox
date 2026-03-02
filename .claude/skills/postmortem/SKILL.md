---
name: postmortem
description: 'Generate a learning postmortem for a completed project. Walks the student through what was built and explains every concept used. Triggers on: postmortem, what did we build, explain this project, study this, learning guide, review what was built.'
---

# Postmortem — Learning Guide Generator

**Learning Flow Step 3: Study It**

After Claude (or Ralph) has built a project, this skill generates a structured learning guide that explains what was built and teaches the concepts behind it.

---

## The Job

1. Identify which app or feature to analyze (ask the student if ambiguous)
2. Scan the app's directory to understand the full implementation
3. Generate a structured postmortem document
4. Save to `docs/postmortems/postmortem-[app-name].md`

**Important:** This is a learning document, not a code review. The goal is to teach concepts, not critique implementation quality.

---

## Output Structure

Generate the postmortem with these sections:

### 1. What We Built

2-3 sentences in plain English describing what the app does. No jargon. Write it like you are explaining to someone who has never seen the app.

### 2. Concepts Used

Organize by category. For each concept:
- Name the concept
- Explain it in 1-2 sentences using an analogy if helpful
- Point to a specific file and line range where the student can see it in action
- Explain what that specific code does in context

**Categories to cover (include only what is relevant to this app):**

**HTML & CSS / Styling**
- Tailwind CSS classes, layouts, responsive design, component styling

**JavaScript / TypeScript**
- Variables, functions, types, interfaces, async/await, error handling, modules

**React**
- Components, props, state (useState), effects (useEffect), hooks, JSX, conditional rendering

**Next.js**
- Pages, routing, server components vs client components, API routes

**Backend (if applicable)**
- REST APIs, controllers, services, modules, middleware, database queries

**Database (if applicable)**
- Tables, columns, relationships, migrations, queries

**Real-Time (if applicable)**
- WebSockets, events, real-time updates

**AI Integration (if applicable)**
- Prompts, AI pipelines, model calls

### 3. How the Pieces Connect

Pick ONE user action (the most common one) and trace it through the entire codebase end-to-end. For example:

> "When you click a cell in tic-tac-toe, here is what happens:"
> 1. The React component detects the click → `apps/tictactoe/src/components/Cell.tsx:15`
> 2. It calls the API → `apps/tictactoe/src/lib/api/gameApi.ts:23`
> 3. The server validates the move → `apps/tictactoe-api/src/game/game.service.ts:45`
> 4. The database stores the result → `apps/tictactoe-api/src/game/game.entity.ts:12`
> 5. The response updates the screen → `apps/tictactoe/src/components/Board.tsx:30`

Use actual file paths and line numbers from the codebase.

### 4. Key Vocabulary

A mini-glossary of 10-15 terms that appeared in this project. Each definition should be 1 sentence.

### 5. What to Explore Next

3-5 suggestions for concepts the student could learn next, based on what this project introduced. Frame them as questions:
- "Curious how the AI decides its next move? Look at the LangGraph pipeline in..."
- "Want to understand how data gets stored? Try reading about PostgreSQL and TypeORM..."

---

## Tone

- Write like a friendly senior developer explaining things to a new team member
- Use "you" and "we" — make it personal
- Do not assume prior knowledge of any concept
- When a concept builds on another, explain the prerequisite first
- Use analogies to everyday objects and experiences

---

## Checklist Before Saving

- [ ] Every concept references a specific file and line range in this codebase
- [ ] No concept is introduced without an explanation
- [ ] The end-to-end walkthrough uses actual file paths
- [ ] The vocabulary section covers terms the student will see in the code
- [ ] Saved to `docs/postmortems/postmortem-[app-name].md`
