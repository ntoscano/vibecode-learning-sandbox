# TicTacToe Architecture

A tic-tac-toe game where you can play against an AI opponent or against another person in real-time. The frontend shows the board and handles clicks. The backend stores the game, enforces the rules, runs the AI, and syncs two players over WebSockets.

---

## The Big Picture

```
┌─────────────────────┐         ┌─────────────────────┐         ┌──────────────┐
│     Frontend         │  HTTP   │      Backend         │         │              │
│  (Next.js + React)   │ ──────> │   (NestJS + API)     │ ──────> │  PostgreSQL   │
│                      │ <────── │                      │ <────── │  (Database)   │
│  localhost:2025      │         │  localhost:3002       │         │  port 54322   │
└─────────────────────┘         └─────────────────────┘         └──────────────┘
         │                               │
         │        WebSocket              │         ┌──────────────┐
         │ <──────────────────────────── │ ──────> │    Redis      │
         │   (real-time PvP updates)     │         │  port 6379    │
         │                               │         └──────────────┘
         │                               │
         │                               │         ┌──────────────┐
         │                               │ ──────> │  AWS Bedrock   │
         │                               │ <────── │  (AI Model)    │
         │                               │         └──────────────┘
```

**How it flows:**
1. You click a cell in the browser (Frontend)
2. The frontend sends a request to the backend (HTTP)
3. The backend validates the move, updates the database, and (in AI mode) asks the AI for a counter-move
4. The backend sends the updated game back to the frontend
5. The frontend redraws the board

In PvP mode, the backend also pushes updates to both players instantly via WebSocket.

---

## Frontend Walkthrough

**Location:** `apps/tictactoe/src/`

### File Tree

```
src/
├── app/                              # Pages (each folder = a URL)
│   ├── page.tsx                      # Home page — AI mode, click to start
│   ├── x/page.tsx                    # PvP: create game as Player X
│   ├── o/page.tsx                    # PvP: join game as Player O
│   ├── game/[id]/page.tsx            # Active game board (both modes)
│   └── layout.tsx                    # Root layout wrapper
│
├── components/                       # Reusable UI pieces
│   ├── AppShell.tsx                  # Main container (sidebar + content)
│   ├── GameBoard.tsx                 # The 3x3 grid
│   ├── Cell.tsx                      # One square on the board
│   ├── GameStatus.tsx                # "X's turn" / "O wins!" message
│   ├── ModeToggle.tsx                # Switch between AI and PvP
│   ├── NewGameButton.tsx             # Start a new game
│   ├── GameHistorySidebar.tsx        # List of past games
│   ├── GameHistoryItem.tsx           # One row in the history list
│   ├── GameHistoryContext.tsx         # Lets nested components trigger history refresh
│   └── ui/                           # Pre-built UI components (button, card, etc.)
│
├── lib/
│   ├── api/
│   │   ├── gameApi.ts                # Functions that talk to the backend
│   │   └── useGameSocket.ts          # WebSocket hook for PvP real-time updates
│   └── graphql/
│       ├── client.ts                 # Apollo Client setup
│       ├── hooks.ts                  # useGameHistory hook
│       ├── queries.ts                # GraphQL query definitions
│       └── transforms.ts            # Transform GraphQL responses to app types
│
└── types/
    └── game.ts                       # TypeScript type definitions
```

### Component Hierarchy

This is what renders what — like a family tree for the UI:

```
layout.tsx
└── AppShell
    ├── GameHistorySidebar
    │   └── GameHistoryItem (one per past game)
    │
    └── [Current Page]
        │
        ├── page.tsx (home — AI mode)
        │   └── GameBoard → Cell × 9
        │
        ├── x/page.tsx (PvP — create game)
        │
        ├── o/page.tsx (PvP — join game)
        │
        └── game/[id]/page.tsx (active game)
            ├── GameStatus
            ├── ModeToggle
            ├── GameBoard → Cell × 9
            └── NewGameButton
```

### Key React Patterns

**State (useState)**
The game page tracks the current game data in state. When the state changes (after a move), React redraws the board automatically.
- See: `src/app/game/[id]/page.tsx` — `useState<Game | null>(null)`

**Effects (useEffect)**
When the game page loads, an effect fetches the game data from the backend.
- See: `src/app/game/[id]/page.tsx` — `useEffect` that calls `getGame(id)`

**Custom Hooks**
Complex logic is extracted into reusable hooks:
- `useGameSocket` — manages the WebSocket connection for PvP updates
- `useGameHistory` — fetches the list of recent games for the sidebar

**Context (createContext)**
The GameHistoryContext lets any nested component trigger a history refresh without passing callbacks through every level. When a game ends, the game page calls `refetchHistory()`, and the sidebar updates.
- See: `src/components/GameHistoryContext.tsx`

### API Client

The file `src/lib/api/gameApi.ts` contains functions that talk to the backend:

| Function | HTTP Method | Endpoint | What It Does |
|----------|------------|----------|-------------|
| `createGame(mode)` | POST | `/api/games` | Start a new game (AI or PvP) |
| `getGame(id)` | GET | `/api/games/{id}` | Fetch a specific game |
| `makeMove(id, position, token)` | POST | `/api/games/{id}/move` | Make a move (position 0-8) |
| `joinGame(id)` | POST | `/api/games/{id}/join` | Join a PvP game as Player O |
| `listGames(limit)` | GET | `/api/games` | Fetch recent games for history |

---

## Backend Walkthrough

**Location:** `apps/tictactoe-api/src/`

### File Tree

```
src/
├── main.ts                           # Starts the server
├── app.module.ts                     # Root module — wires everything together
│
├── modules/
│   ├── game/
│   │   ├── game.module.ts            # Game module definition
│   │   ├── game.controller.ts        # Receives HTTP requests
│   │   ├── game.service.ts           # Business logic (rules, validation)
│   │   ├── game.entity.ts            # Database table definition
│   │   ├── game.gateway.ts           # WebSocket handler for PvP
│   │   └── dto/                      # Data shapes for requests/responses
│   │       ├── create-game.dto.ts
│   │       ├── make-move.dto.ts
│   │       └── game-state.dto.ts
│   │
│   └── ai/
│       ├── ai.module.ts              # AI module definition
│       ├── ai.service.ts             # Entry point for AI moves
│       ├── move-graph.ts             # LangGraph pipeline definition
│       ├── graph-state.ts            # Pipeline state schema
│       ├── nodes.ts                  # The 3 pipeline steps
│       ├── llm.ts                    # AI model configuration
│       ├── move-prompt.ts            # The prompt sent to the AI
│       └── move-validator.ts         # Parses and validates AI responses
│
├── lib/game/
│   ├── gameLogic.ts                  # Pure game logic (win checking, etc.)
│   └── types.ts                      # Shared type definitions
│
├── config/
│   ├── typeorm.ts                    # Database connection setup
│   ├── graphile.ts                   # GraphQL auto-generation
│   └── postgres.ts                   # Connection string builder
│
├── adapters/
│   └── redis-io.adapter.ts           # WebSocket + Redis bridge
│
└── migrations/                       # Database structure changes
    ├── ...-CreateGame.ts
    ├── ...-AddGameModeAndTurnTracking.ts
    └── ...-CreatePostgraphileReadOnlyRole.ts
```

### The Controller → Service → Entity Pattern

The backend follows a pattern you will see in most web applications. Think of it like a restaurant:

| Role | Analogy | File | What It Does |
|------|---------|------|-------------|
| **Controller** | Waiter | `game.controller.ts` | Takes the request from the frontend, passes it to the service, and returns the response |
| **Service** | Chef | `game.service.ts` | Contains the actual logic — validates moves, checks for wins, coordinates with the AI |
| **Entity** | Recipe book + pantry | `game.entity.ts` | Defines what data gets stored in the database and how |

The controller never touches the database directly. The service never handles HTTP requests. Each piece has one job.

### REST API Endpoints

| Method | Endpoint | What It Does |
|--------|----------|-------------|
| `POST /api/games` | Creates a new game. Accepts `{ mode: "ai" or "pvp" }`. Returns the game state and a player token. |
| `GET /api/games` | Lists recent games (for the history sidebar). Optional `?limit=20` parameter. |
| `GET /api/games/:id` | Fetches a specific game by its ID. |
| `POST /api/games/:id/move` | Makes a move. Accepts `{ position: 0-8 }` in the body and an optional `X-Player-Token` header for PvP. In AI mode, the response includes the AI's counter-move. |
| `POST /api/games/:id/join` | Joins a PvP game as Player O. Returns the Player O token. |

### Game Logic (Pure Functions)

The file `src/lib/game/gameLogic.ts` contains functions that handle the rules of tic-tac-toe. These are "pure" functions — they take input and return output without changing anything else.

| Function | What It Does |
|----------|-------------|
| `checkWinner(board)` | Checks all 8 possible win lines (3 rows, 3 columns, 2 diagonals) and returns the winner or null |
| `isBoardFull(board)` | Returns true if all 9 cells are filled (draw condition) |
| `getGameStatus(board)` | Returns `in_progress`, `x_wins`, `o_wins`, or `draw` |
| `isValidMove(board, position)` | Returns true if the position (0-8) is empty |
| `applyMove(board, position, player)` | Returns a new board with the move applied |
| `getAvailablePositions(board)` | Returns a list of empty cell positions |

### Database: The Game Entity

The Game entity (`src/modules/game/game.entity.ts`) defines what gets stored in PostgreSQL:

| Column | Type | What It Stores |
|--------|------|---------------|
| `id` | UUID | Unique identifier for each game |
| `board_state` | JSON array | The 9 cells — each is `"X"`, `"O"`, or `null` |
| `status` | String | `in_progress`, `x_wins`, `o_wins`, or `draw` |
| `winner` | String or null | `"X"`, `"O"`, or `null` if no winner yet |
| `moves` | JSON array | History of every move (position, player, move number) |
| `mode` | String | `"ai"` or `"pvp"` |
| `current_turn` | String | `"X"` or `"O"` — whose turn is it |
| `player_x_token` | UUID | Secret token that proves you are Player X |
| `player_o_token` | UUID or null | Secret token for Player O (null until they join in PvP) |
| `created_at` | Timestamp | When the game was created |
| `updated_at` | Timestamp | When the game was last modified |

---

## How a Move Works (End-to-End)

Here is what happens when you click a cell during an AI game, traced through the entire codebase:

**1. You click a cell**
The `Cell` component detects the click and calls the `onClick` handler passed down from the game page.
→ `src/components/Cell.tsx`

**2. The game page calls the API**
The click handler calls `makeMove(gameId, position, playerToken)`, which sends an HTTP POST to the backend.
→ `src/lib/api/gameApi.ts` — `makeMove()` function

**3. The controller receives the request**
NestJS routes the POST to the game controller, which extracts the position and player token, then calls the game service.
→ `src/modules/game/game.controller.ts` — `makeMove()` method

**4. The service processes the move**
Inside a database transaction (to prevent two moves from happening at once):
- Loads the game from the database with a write lock
- Validates the position is legal (0-8, cell is empty)
- In PvP mode: validates the player token matches the current turn
- Applies the player's move to the board
- Checks if the player won or if it is a draw
→ `src/modules/game/game.service.ts` — `makeMove()` method

**5. The AI generates a counter-move**
If the game is in AI mode and still in progress:
- Calls the AI service, which runs the LangGraph pipeline
- The pipeline sends the board to the AI model, gets back a position
- The AI's move is applied to the board
- Win/draw is checked again
→ `src/modules/ai/ai.service.ts` → `src/modules/ai/move-graph.ts`

**6. The database is updated**
The updated game (with both the player's move and the AI's move) is saved to PostgreSQL.

**7. The response goes back**
The controller sends the updated game state back as JSON.

**8. The frontend updates**
The game page receives the response, updates its state, and React redraws the board showing both moves.
→ `src/app/game/[id]/page.tsx` — state update after `makeMove()` resolves

---

## The AI Pipeline

The AI uses LangGraph to decide its moves. LangGraph is a tool that lets you build multi-step pipelines where each step can check and fix the previous step's work.

**Location:** `src/modules/ai/`

### The 3 Steps

```
Board State → [Input Validation] → [Move Generation] → [Move Validation] → Position (0-8)
```

**Step 1: Input Validation** (`nodes.ts` — `inputValidationNode`)
- Confirms the game is still in progress
- Calculates which positions are available (empty cells)
- Formats the board as text for the AI to read

**Step 2: Move Generation** (`nodes.ts` — `moveGenerationNode`)
- Sends a prompt to the AI model (DeepSeek-R1 via AWS Bedrock)
- The prompt shows the board and says "You are O. Choose from these available positions. Respond with ONLY a single digit 0-8."
- Parses the AI's response to extract the position number
- If the AI gives an invalid response, retries up to 3 times with feedback about what went wrong

**Step 3: Move Validation** (`nodes.ts` — `moveValidationNode`)
- Double-checks that the AI's chosen position is actually empty
- This is a safety net — even if the AI messes up, this step catches it

### Why LangGraph?

You could just call the AI model directly. LangGraph adds structure:
- **Retries:** If the AI returns garbage, the pipeline retries with an error message
- **Separation:** Each step has one job, making it easy to debug
- **State:** Data flows cleanly from step to step without global variables

---

## PvP Real-Time (WebSocket)

When two players are in a game, they need to see each other's moves instantly — without refreshing the page. This is what WebSockets are for.

### How it works

**Normal HTTP:** Your browser asks a question, the server answers, the connection closes. To get updates, you would have to keep asking "anything new?" over and over.

**WebSocket:** Your browser opens a persistent connection to the server. The server can push updates to you whenever it wants. Like a phone call instead of texting.

### The Flow

1. **Both players connect.** When a player opens a game page, the `useGameSocket` hook connects to the backend's WebSocket server and joins a "room" for that game.
→ `src/lib/api/useGameSocket.ts`

2. **Player X makes a move.** The move goes through the normal HTTP API (POST /api/games/:id/move).

3. **The backend broadcasts.** After saving the move, the game service tells the WebSocket gateway to send the updated game to everyone in that room.
→ `src/modules/game/game.gateway.ts` — `broadcastGameUpdate()`

4. **Player O's board updates.** Player O's `useGameSocket` hook receives the update and refreshes the game state. The board redraws instantly.

### Redis Adapter

The WebSocket gateway uses Redis as a bridge (`src/adapters/redis-io.adapter.ts`). This means if you ran multiple backend servers, players connected to different servers would still receive each other's updates. For this sandbox it is not strictly necessary, but it is how production apps work.

---

## Key Vocabulary

Terms specific to this app (see the [main glossary](../glossary.md) for general terms):

| Term | Meaning |
|------|---------|
| **Entity** | A TypeScript class that maps to a database table. The Game entity defines the columns of the `game` table. |
| **Controller** | The part of the backend that receives HTTP requests and returns responses. Like a waiter. |
| **Service** | The part of the backend that contains business logic. Like a chef. |
| **DTO** | Data Transfer Object — defines the shape of data going in or out of the API. |
| **Transaction** | A database operation that either fully succeeds or fully rolls back. Prevents half-finished updates. |
| **Pessimistic Lock** | A database lock that says "nobody else can modify this row until I am done." Prevents two moves from happening at the same time. |
| **Gateway** | The NestJS component that handles WebSocket connections. |
| **LangGraph** | A tool for building multi-step AI pipelines where data flows through a series of processing nodes. |
| **Node (in LangGraph)** | One step in an AI pipeline. Each node takes input, does its job, and passes output to the next node. |
| **Migration** | A file that describes a change to the database structure. Migrations run in order to keep everyone's database in sync. |
