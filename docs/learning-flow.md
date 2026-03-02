# The Learning Flow

This sandbox uses a 4-step cycle. Each time through the cycle, you build a real app and learn the concepts behind it.

---

## The 4 Steps

| Step | Name | Who Does the Work | What You End Up With |
|------|------|-------------------|---------------------|
| 1 | **Dream It** | You + Claude together | A PRD (blueprint) for your app |
| 2 | **Vibe It** | Claude builds it | A working app you can run |
| 3 | **Study It** | Claude explains, you read | A learning guide connecting code to concepts |
| 4 | **Own It** | You code, Claude tutors | A feature you built yourself |

Then you start over with a new project. Each cycle teaches you more.

---

## Worked Example: Building a Todo App

Here is what the full cycle looks like for a simple todo app.

### Step 1: Dream It

You tell Claude what you want to build:

> **You:** "I want to build a todo app where I can add tasks, check them off, and delete them."

Claude asks clarifying questions:

> **Claude:** "Great idea! A few questions to scope this out:
> 1. Should tasks be saved between sessions, or is it okay if they disappear when you close the browser?
>    A. Save them (needs a backend/database)
>    B. In-browser only (simpler, frontend only)
> 2. What does the UI look like?
>    A. Simple list with checkboxes
>    B. Card-based layout with categories
> 3. Scope?
>    A. Just the basics (add, complete, delete)
>    B. Add filtering, sorting, and search too"

> **You:** "1B, 2A, 3A"

Claude generates a PRD and saves it to `tasks/prd-todo-app.md`. The PRD includes:
- An overview of what the app does
- Learning objectives (React state, event handling, list rendering, Tailwind styling)
- 4-5 user stories describing each feature
- What is out of scope

**Time: ~5 minutes**

### Step 2: Vibe It

You tell Claude to build it:

> **You:** "Implement this PRD"

Claude reads the blueprint and starts writing code. You watch as it:
- Creates a new Next.js app in `apps/todo/`
- Builds React components: TodoList, TodoItem, AddTodoForm
- Adds Tailwind styling for a clean layout
- Wires up useState hooks for the task list
- Makes the checkboxes and delete buttons work

After a few minutes, Claude tells you it is done and how to run it:

> **Claude:** "Your todo app is ready. Run `cd apps/todo && pnpm dev` and open http://localhost:2026."

You try it out. It works — you can add tasks, check them off, and delete them.

**Time: ~5-15 minutes (depending on complexity)**

### Step 3: Study It

Now the learning starts. You ask for a postmortem:

> **You:** "Run a postmortem on the todo app"

Claude scans the app and generates a learning guide. Here is what a piece of it looks like:

> **React State (useState)**
>
> Think of state like a whiteboard that React watches. When you erase something and write something new, React notices and updates the screen to match.
>
> In `apps/todo/src/app/page.tsx` line 8:
> ```tsx
> const [todos, setTodos] = useState<Todo[]>([]);
> ```
> This creates a "whiteboard" called `todos` that starts as an empty list. Every time you add or remove a task, `setTodos` updates the whiteboard, and React redraws the list on screen.

The postmortem covers every concept: components, props, event handlers, array methods, conditional rendering, Tailwind classes. Each one points to a specific file and line in YOUR code.

**Time: ~10 minutes to read through**

### Step 4: Own It

You are ready to write code yourself. Ask for a challenge:

> **You:** "Give me a feature challenge for the todo app"

Claude asks your comfort level, then generates an exercise:

> **Feature Challenge: Add a "Clear Completed" Button**
>
> **What You Will Build:** A button that removes all completed tasks at once.
>
> **What You Will Learn:** Array filtering, event handlers, conditional rendering
>
> **Step 1:** Open `apps/todo/src/app/page.tsx`
> - Find where the todo list is rendered
> - **Hint:** Look for the `.map()` call
>
> **Step 2:** Add a new button below the list
> - **File to edit:** `apps/todo/src/app/page.tsx`
> - **Hint:** Use the same button style as the "Add" button
>
> **Step 3:** Make the button filter out completed todos
> - **Hint:** JavaScript's `.filter()` method lets you keep only items that match a condition
> - **Concept:** This is the same pattern used in many apps — filtering an array based on a property
>
> **How to Check Your Work:**
> - [ ] Add 3 tasks, complete 2 of them
> - [ ] Click "Clear Completed"
> - [ ] Only the 1 incomplete task remains

Now you write the code. If you get stuck:

> **You:** "I'm stuck on Step 3. I don't know how filter works."

Claude switches to tutor mode — it explains the concept, gives you a small hint, but does NOT write the code for you. You learn by doing.

**Time: ~15-30 minutes**

---

## Tips for Getting the Most Out of Each Step

### Dream It
- **Start small.** Your first PRD should have 3-5 features, not 20. You can always add more later.
- **Describe what the user sees and does**, not technical details. "The user clicks a button and the task disappears" is better than "implement a DELETE API endpoint."
- **Ask Claude to scope it down** if the PRD feels too big.

### Vibe It
- **Watch what Claude does.** Even though Claude is writing the code, pay attention to what files it creates and what it says about each one.
- **Run the app** as soon as Claude says it is ready. Click around. Break things. See what happens.

### Study It
- **Read the whole postmortem**, even the parts that do not make sense yet. You will understand more each time.
- **Open the files it references.** Reading code in your editor alongside the explanation makes concepts stick.
- **Use `/concept-explainer`** if a specific term or pattern confuses you. Ask Claude to go deeper.

### Own It
- **Do not skip this step.** This is where the real learning happens. Vibecoding is fun, but writing code yourself is how you become a developer.
- **It is okay to struggle.** If you are stuck for more than 10 minutes, ask Claude for a hint. Getting stuck and working through it is part of the process.
- **It is okay to look at existing code** for reference. The tictactoe app is always there as an example.

---

## What to Build Next

### First Project: Something Visual
Build something where you can see the result immediately in the browser.

**Ideas:**
- Todo app (add, complete, delete tasks)
- Quiz app (multiple choice questions with scoring)
- Counter app (increment, decrement, reset)
- Color picker (click to change background colors)

**Concepts you will learn:** HTML structure, CSS styling with Tailwind, React components, state with useState, event handling (clicks, form submissions)

### Second Project: Add a Backend
Build something that saves data so it persists across sessions.

**Ideas:**
- Bookmark manager (save and categorize links)
- Journal app (write and view entries)
- Recipe book (add recipes with ingredients and steps)

**Concepts you will learn:** REST APIs, HTTP methods (GET, POST, DELETE), databases with PostgreSQL, NestJS controllers and services, fetching data from the frontend

### Third Project: Add AI
Build something that uses an AI model.

**Ideas:**
- Chatbot with a custom personality
- Story generator (give it a prompt, get a short story)
- Flashcard app that generates questions from your notes

**Concepts you will learn:** AI prompts, LangGraph pipelines, API integration with AWS Bedrock, prompt engineering, handling AI responses
