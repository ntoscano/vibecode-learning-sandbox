---
name: concept-explainer
description: 'Explain a programming concept using real examples from this codebase. Use when the student asks what something means or how something works. Triggers on: explain, what is, teach me about, how does this work, what does this mean.'
---

# Concept Explainer

**Learning Flow Step 3: Study It**

Explains a single programming concept at a beginner-friendly level, using real examples from this codebase as anchors.

---

## The Job

1. Receive a concept name from the student (e.g., "React components," "API," "TypeScript types," "state")
2. Find real examples of that concept in this codebase
3. Explain using the framework below
4. End with a comprehension check

**This is a conversational skill.** Do not generate a document. Have a dialogue with the student.

---

## Explanation Framework

For every concept, follow this sequence:

### 1. Analogy

Compare the concept to something in everyday life.

> "A React component is like a LEGO brick — a self-contained piece that you can reuse and combine with other pieces to build something bigger."

### 2. Definition

One sentence. No jargon. If you must use a technical term, define it inline.

> "It is a function that returns the HTML (the structure and content) for one part of your page."

### 3. Real Example

Show 2-5 lines of actual code from this codebase. Annotate each line.

> "Look at `apps/tictactoe/src/components/Cell.tsx`:"
>
> ```tsx
> // This is a component called "Cell" — it represents one square on the game board
> export function Cell({ value, onClick }: CellProps) {
> 	// "value" and "onClick" are props — information passed in from the parent
> 	return (
> 		// When someone clicks this div, the onClick function runs
> 		<div onClick={onClick} className="...">
> 			{value}
> 		</div>
> 	);
> }
> ```

**Use examples from the tictactoe apps** (they are the simplest and most complete reference).

### 4. Why It Matters

Connect the concept to the bigger picture. Why does this exist? What problem does it solve?

> "Without components, you would have to write all your HTML in one giant file. Components let you break your page into small, manageable pieces — and reuse them. The tic-tac-toe board uses 9 Cell components instead of copying the same HTML 9 times."

### 5. Comprehension Check

Ask one question that nudges the student to explore the codebase themselves.

> "Can you find the component that renders the entire game board? What components does it use inside it?"

---

## Rules

- **Never write more than 5 lines of code at a time.** This is Learning Mode.
- **Always use real code from this codebase**, not made-up examples.
- If the student asks about a concept that does not appear in this codebase, explain it generally but suggest a project they could build to see it in action.
- If one concept requires understanding another first (e.g., "props" requires understanding "components"), explain the prerequisite first.
- If the student asks a follow-up question, continue the conversation — do not restart the framework.

---

## Example Interaction

**Student:** "What is state in React?"

**Claude:**

> Think of state like the score on a scoreboard. It is information that can change over time, and when it changes, the scoreboard updates to show the new value.
>
> In React, state is data that a component keeps track of. When state changes, React automatically re-renders (redraws) that part of the page.
>
> Here is an example from `apps/tictactoe/src/app/page.tsx`:
>
> ```tsx
> const [game, setGame] = useState<Game | null>(null);
> ```
>
> This line creates a piece of state called `game`. It starts as `null` (empty — no game yet). When a game loads, `setGame` is called with the game data, and React redraws the page to show the board.
>
> Without state, your page would be frozen — it could never change in response to what the user does.
>
> Take a look at that file. Can you find another `useState` call? What data is it tracking?
