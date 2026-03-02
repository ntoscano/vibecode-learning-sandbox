# 14-Week Software Bootcamp Curriculum

A structured learning path for junior developers using the Vibecode Learning Sandbox.

---

## How to Use This Curriculum

This curriculum is designed to work with Claude Code and this sandbox's learning flow.

### Getting Started

1. **Pick a lesson** — Start with Week 1, Lesson 1. If you already have VS Code, the terminal, and Git set up, skip to Week 3.
2. **Copy the lesson to Claude** — Paste the lesson title, objective, and concepts into Claude Code.
3. **Ask Claude for exercises** — Say something like:
   > "Give me exercises for Week 5, Lesson 2"
   >
   > "I'm working on Week 7, Lesson 4 — can you give me a feature challenge?"
   >
   > "Explain the concepts from Week 4, Lesson 3 using the tictactoe app"
4. **Follow the learning flow** — Claude will use the sandbox's 4-step cycle (Dream It, Vibe It, Study It, Own It) to teach you each lesson. See `docs/learning-flow.md` for details.

### Tips

- **Go in order.** Later lessons assume you know the concepts from earlier ones.
- **Don't skip "Own It."** Watching Claude build things is fun, but writing code yourself is how you actually learn.
- **If a lesson feels too easy,** ask Claude for a harder version or skip ahead.
- **If a lesson feels too hard,** ask Claude to explain the prerequisite concepts first, or go back a lesson.
- **Already know Git and the terminal?** Skip to Week 3 — that is where coding starts.
- **Use the glossary.** If you see a word you don't know, check `docs/glossary.md`.

### Suggested Pace

- **Full-time (summer/intensive):** 1 week of curriculum per real week (6 lessons per week)
- **Part-time (school year):** 2-3 lessons per week — the curriculum will take about 7 months
- **Self-paced:** Go as fast or slow as you need. There is no deadline.

---

## Weeks 1-2: Getting Set Up — Your Tools and Environment

*Focus: Set up the tools real developers use. Get comfortable before writing any code.*

Before you write a single line of code, you need to know your way around the tools. These two weeks are about getting your workspace ready and building confidence with the basics: your code editor, the terminal, and Git. None of this is hard — it is just new. By the end of Week 2, you will have the same setup as a professional developer and you will have published your first project to GitHub. Then the real fun starts.

---

### Week 1: Your Developer Workspace

#### Lesson 1: Meet Your Code Editor (VS Code)

- **Objective:** Install VS Code and learn what a code editor is — the place where you will write all of your code.
- **Key concepts:** Code editor vs word processor, installing VS Code, opening VS Code for the first time, the welcome screen
- **Exercise type:** Read & explain — Claude walks you through downloading, installing, and opening VS Code. You explore the welcome screen together and Claude explains what you are looking at.

#### Lesson 2: Finding Your Way Around VS Code

- **Objective:** Learn the main areas of the VS Code window so you know where to look when you need something.
- **Key concepts:** Sidebar (Explorer, Search, Extensions), the editor area, the terminal panel, opening and closing files, tabs
- **Exercise type:** Read & explain — Claude gives you a scavenger hunt of things to find in VS Code: open the Explorer, find the search bar, open a new tab, switch between tabs. Each one builds familiarity with the interface.

#### Lesson 3: Files and Folders — How Projects Are Organized

- **Objective:** Understand how files and folders work on your computer, and how a coding project is organized.
- **Key concepts:** Files vs folders (directories), file extensions (.js, .html, .css, .md), opening a folder in VS Code, the file tree
- **Exercise type:** Build from scratch — create a folder on your computer called "my-first-project," add three empty files inside it (index.html, style.css, notes.txt), then open the folder in VS Code and see them in the Explorer panel.

#### Lesson 4: What Is the Terminal?

- **Objective:** Open the terminal inside VS Code and understand that it is just a way to talk to your computer by typing.
- **Key concepts:** Terminal (command line), the prompt, typing a command and pressing Enter, the terminal is not scary
- **Exercise type:** Read & explain — Claude walks you through opening the integrated terminal in VS Code, explains what the blinking cursor means, and has you type your first commands: `whoami` and `date`. You see that the computer responds to what you type.

#### Lesson 5: Navigating with the Terminal

- **Objective:** Use terminal commands to move around your computer's file system — the same files and folders you see in Finder or File Explorer.
- **Key concepts:** `pwd` (where am I?), `ls` (what is here?), `cd` (go to a folder), `cd ..` (go back), absolute vs relative paths
- **Exercise type:** Build from scratch — navigate to the "my-first-project" folder you created in Lesson 3 using only the terminal. List the files inside it. Go back to your home folder. Claude confirms each step.

#### Lesson 6: Creating and Managing Files from the Terminal

- **Objective:** Create, move, and delete files and folders using terminal commands instead of clicking.
- **Key concepts:** `mkdir` (create folder), `touch` (create file), `mv` (move/rename), `rm` (delete), `cat` (view file contents), why developers use the terminal for file operations
- **Exercise type:** Build from scratch — using only the terminal, create a new folder called "terminal-practice," add three files to it, rename one, delete another, and list what remains. Claude verifies your work by having you run `ls` at the end.

---

### Week 2: Git — Saving and Sharing Your Work

#### Lesson 1: What Is Git and Why Do Developers Use It?

- **Objective:** Understand what version control is and why every developer uses Git — before you even install it.
- **Key concepts:** Version control (like "undo" for your whole project), why saving copies of files on your desktop does not scale, snapshots of your project over time, Git is the industry standard
- **Exercise type:** Read & explain — Claude explains Git using a save-game analogy: every time you reach a checkpoint, you save your progress. If you mess up, you can go back to any save. Then Claude shows a real example of looking at a project's Git history in this sandbox.

#### Lesson 2: Installing Git and Your First Repository

- **Objective:** Install Git, configure it with your name, and create your first Git repository.
- **Key concepts:** Installing Git, `git config` (telling Git who you are), `git init` (starting a new repository), what a repository is, the `.git` folder
- **Exercise type:** Build from scratch — install Git (if not already installed), set your name and email with `git config`, then create a new folder, run `git init` inside it, and confirm Git is tracking it. Claude explains each command before you run it.

#### Lesson 3: Your First Commit — Saving a Snapshot

- **Objective:** Make your first Git commit — a saved snapshot of your project at a point in time.
- **Key concepts:** `git status` (what changed?), `git add` (stage changes), `git commit -m "message"` (save the snapshot), the staging area, writing good commit messages
- **Exercise type:** Build from scratch — create a file called `hello.txt` with a sentence in it, add it to staging with `git add`, and commit it with a message. Then edit the file, check `git status`, and make a second commit. Claude celebrates your first commits.

#### Lesson 4: Reading Your Project's History

- **Objective:** Use Git to look back at previous snapshots and see what changed between them.
- **Key concepts:** `git log` (view commit history), `git diff` (see what changed), commit hashes, reading the log output
- **Exercise type:** Read & explain — Claude has you run `git log` and `git diff` on your practice repository and explains what every piece of the output means. Then Claude shows you the log of the actual vibecode-learning-sandbox repository so you can see a real project's history.

#### Lesson 5: GitHub — Putting Your Code Online

- **Objective:** Create a GitHub account and push your local repository to GitHub so anyone can see it.
- **Key concepts:** GitHub (a website for hosting Git repositories), remote repositories, `git remote add`, `git push`, public vs private repositories, your GitHub profile
- **Exercise type:** Build from scratch — create a free GitHub account, create a new repository on GitHub, connect your local repository to it with `git remote add origin`, and push your commits with `git push`. Claude walks you through every screen and button.

#### Lesson 6: Cloning — Downloading Someone Else's Code

- **Objective:** Clone an existing repository from GitHub to your computer, which is exactly how you got this sandbox.
- **Key concepts:** `git clone` (download a repository), cloning vs downloading a zip file, the relationship between your local copy and the remote, `git pull` (get updates)
- **Exercise type:** Build from scratch — clone a small public repository to a new folder on your computer, explore its files in VS Code, and run `git log` to see its history. Claude connects this to your own experience: "This is exactly what you did when you set up this sandbox."

---

## Weeks 3-5: Foundations — JavaScript, HTML, CSS, TypeScript

*Focus: Core web fundamentals. Build things you can see immediately.*

These three weeks teach you the building blocks of every web app. By the end, you will be writing TypeScript confidently and building styled web pages.

---

### Week 3: Your First Lines of Code

#### Lesson 1: What Is Programming?

- **Objective:** Understand what code is, how it runs, and write your first lines of JavaScript.
- **Key concepts:** Variables, console.log, strings, numbers
- **Exercise type:** Read & explain — Claude walks you through running JavaScript in the terminal with Node.js and explains what each line does.

#### Lesson 2: Making Decisions with Code

- **Objective:** Use if/else statements to make your code behave differently based on conditions.
- **Key concepts:** Booleans, if/else, comparison operators (===, >, <), logical operators (&&, ||)
- **Exercise type:** Build from scratch — write a program that gives different responses based on user input (like a simple chatbot that responds to greetings).

#### Lesson 3: Repeating Things with Loops

- **Objective:** Use loops to repeat actions without writing the same code over and over.
- **Key concepts:** for loops, while loops, loop counters, arrays (introduction)
- **Exercise type:** Build from scratch — write a program that counts down from 10 and prints each number, then prints "Liftoff!"

#### Lesson 4: Organizing Code with Functions

- **Objective:** Write reusable functions that take input and return output.
- **Key concepts:** Function declaration, parameters, return values, calling functions
- **Exercise type:** Build from scratch — write a set of calculator functions (add, subtract, multiply, divide) and use them together.

#### Lesson 5: Working with Lists (Arrays)

- **Objective:** Store and manipulate collections of data using arrays.
- **Key concepts:** Arrays, push, pop, length, accessing items by index, iterating with for loops
- **Exercise type:** Build from scratch — write a program that manages a shopping list (add items, remove items, display the list).

#### Lesson 6: Objects — Grouping Related Data

- **Objective:** Use objects to group related pieces of data together under one name.
- **Key concepts:** Object literals, properties, dot notation, bracket notation, objects inside arrays
- **Exercise type:** Modify existing code — Claude provides a student roster program, and you add a function that finds a student by name and returns their grade.

---

### Week 4: The Web Starts Here — HTML, CSS, and the Browser

#### Lesson 1: Your First Web Page (HTML)

- **Objective:** Create an HTML file that displays structured content in a browser.
- **Key concepts:** HTML tags (h1, p, a, img, ul/li), nesting, attributes, the DOM
- **Exercise type:** Build from scratch — create a personal "About Me" web page with headings, paragraphs, a photo, and a list of hobbies.

#### Lesson 2: Styling with CSS Basics

- **Objective:** Change how a web page looks using CSS properties.
- **Key concepts:** CSS selectors, properties (color, font-size, margin, padding), classes, the style tag
- **Exercise type:** Modify existing code — take the "About Me" page and style it with colors, fonts, and spacing.

#### Lesson 3: Layout with Flexbox

- **Objective:** Arrange elements on a page using Flexbox, the modern way to do layouts.
- **Key concepts:** display: flex, justify-content, align-items, flex-direction, gap
- **Exercise type:** Build from scratch — create a navigation bar and a card layout using Flexbox.

#### Lesson 4: Introduction to Tailwind CSS

- **Objective:** Use Tailwind CSS utility classes to style elements directly in HTML instead of writing separate CSS.
- **Key concepts:** Utility classes, responsive prefixes (sm:, md:, lg:), Tailwind class names for spacing/color/typography
- **Exercise type:** Modify existing code — convert your CSS-styled page to use Tailwind classes. Reference how the tictactoe app (`apps/tictactoe`) uses Tailwind.

#### Lesson 5: JavaScript in the Browser

- **Objective:** Make a web page interactive by connecting JavaScript to HTML elements.
- **Key concepts:** document.querySelector, addEventListener, click events, changing text and styles with JS
- **Exercise type:** Build from scratch — create a page with a button that changes the background color each time you click it.

#### Lesson 6: Putting It Together — A Mini Project

- **Objective:** Combine HTML, CSS, and JavaScript to build a small interactive project.
- **Key concepts:** DOM manipulation, event handling, combining structure (HTML), style (CSS/Tailwind), and behavior (JS)
- **Exercise type:** Dream It + Vibe It + Study It — use `/prd` to plan a simple interactive page (a quiz, a tip calculator, or a countdown timer), have Claude build it, then study the postmortem.

---

### Week 5: TypeScript and Modern JavaScript

#### Lesson 1: Why TypeScript?

- **Objective:** Understand what TypeScript adds to JavaScript and why this codebase uses it.
- **Key concepts:** Type annotations, string/number/boolean types, type errors, the TypeScript compiler (tsc)
- **Exercise type:** Read & explain — Claude shows side-by-side JavaScript vs TypeScript and explains how types catch bugs. Reference TypeScript files in the tictactoe app.

#### Lesson 2: TypeScript Types in Practice

- **Objective:** Add type annotations to variables, function parameters, and return values.
- **Key concepts:** Type annotations, function types, union types (string | number), type inference
- **Exercise type:** Modify existing code — Claude provides untyped JavaScript functions, and you add TypeScript types to make them type-safe.

#### Lesson 3: Interfaces and Custom Types

- **Objective:** Define your own types to describe the shape of objects.
- **Key concepts:** Interfaces, optional properties (?), type aliases, arrays of typed objects
- **Exercise type:** Build from scratch — define interfaces for a music playlist app (Song, Playlist, Artist) and write functions that use them.

#### Lesson 4: Modern JavaScript — Arrow Functions and Destructuring

- **Objective:** Use modern JavaScript syntax that you will see throughout this codebase.
- **Key concepts:** Arrow functions (=>), destructuring objects and arrays, template literals (`Hello ${name}`), spread operator (...)
- **Exercise type:** Modify existing code — rewrite traditional functions using modern syntax. Reference how the tictactoe app uses arrow functions and destructuring.

#### Lesson 5: Array Methods — map, filter, reduce

- **Objective:** Transform and filter data using array methods instead of manual loops.
- **Key concepts:** .map(), .filter(), .reduce(), chaining methods, callbacks
- **Exercise type:** Build from scratch — given an array of student objects, write functions to: get names of passing students (filter + map), calculate class average (reduce), and find the highest grade (reduce).

#### Lesson 6: Async JavaScript — Promises and async/await

- **Objective:** Understand how JavaScript handles operations that take time (like fetching data from a server).
- **Key concepts:** Promises, async/await, try/catch for error handling, why async matters for web apps
- **Exercise type:** Read & explain — Claude explains async with a restaurant analogy (you place an order and wait, the kitchen works in the background), then shows async code from the tictactoe app's API calls.

---

## Weeks 6-7: Backend — Node.js, NestJS, Databases, APIs

*Focus: How servers work. Build your first API.*

Now you will learn what happens behind the scenes. When you click a button in a web app and data gets saved — that is the backend. These two weeks teach you how to build one.

---

### Week 6: Your First Server

#### Lesson 1: What Is a Server?

- **Objective:** Understand what a backend server does and how the frontend talks to it.
- **Key concepts:** Client-server model, HTTP requests/responses, URLs, ports, localhost
- **Exercise type:** Read & explain — Claude explains the client-server model using a restaurant analogy (frontend = customer, server = waiter, database = kitchen), then shows how the tictactoe frontend sends requests to the tictactoe-api.

#### Lesson 2: HTTP Methods and REST APIs

- **Objective:** Understand the four main HTTP methods and how they map to actions in an app.
- **Key concepts:** GET (read), POST (create), PUT/PATCH (update), DELETE (remove), REST conventions, status codes (200, 201, 404, 500)
- **Exercise type:** Read & explain — Claude walks through the tictactoe API endpoints (`apps/tictactoe-api`) and explains what each one does and which HTTP method it uses.

#### Lesson 3: Introduction to NestJS

- **Objective:** Understand how NestJS organizes backend code into modules, controllers, and services.
- **Key concepts:** NestJS modules, controllers (handle requests), services (business logic), decorators (@Get, @Post, @Controller)
- **Exercise type:** Read & explain — Claude walks through the tictactoe-api's controller and service files, explaining the pattern. Reference `apps/tictactoe-api/src/`.

#### Lesson 4: Building Your First Endpoint

- **Objective:** Create a NestJS API endpoint that returns data when you visit a URL.
- **Key concepts:** @Controller, @Get, route parameters, returning JSON, testing with curl or the browser
- **Exercise type:** Build from scratch — create a simple "hello world" API with endpoints like GET /api/hello and GET /api/hello/:name that return greeting messages.

#### Lesson 5: POST Requests — Receiving Data

- **Objective:** Create endpoints that accept data from the frontend and do something with it.
- **Key concepts:** @Post, @Body decorator, request body, DTOs (Data Transfer Objects), validation basics
- **Exercise type:** Modify existing code — add a POST endpoint to your hello API that accepts a name and a message and stores them in an array (in-memory for now).

#### Lesson 6: Putting It Together — A Simple API

- **Objective:** Build a complete CRUD API (Create, Read, Update, Delete) for a simple resource.
- **Key concepts:** CRUD operations, REST route conventions, in-memory storage, testing all endpoints
- **Exercise type:** Dream It + Vibe It + Study It — use `/prd` to plan a simple API (bookmarks, notes, or contacts), have Claude build it with NestJS, then study the postmortem.

---

### Week 7: Databases and Data Persistence

#### Lesson 1: Why Databases?

- **Objective:** Understand why apps need databases and what happens without one.
- **Key concepts:** Data persistence, in-memory vs permanent storage, relational databases, tables/rows/columns
- **Exercise type:** Read & explain — Claude demonstrates the problem (restart the server, data disappears) and explains how databases solve it.

#### Lesson 2: Introduction to PostgreSQL and SQL

- **Objective:** Write basic SQL queries to create, read, update, and delete data.
- **Key concepts:** CREATE TABLE, INSERT, SELECT, UPDATE, DELETE, WHERE clauses, data types (VARCHAR, INTEGER, BOOLEAN)
- **Exercise type:** Build from scratch — write SQL queries to manage a table of books (title, author, year, is_read).

#### Lesson 3: TypeORM — Talking to the Database from Code

- **Objective:** Use TypeORM to interact with PostgreSQL from your NestJS app instead of writing raw SQL.
- **Key concepts:** ORM (Object-Relational Mapping), entities, columns, decorators (@Entity, @Column, @PrimaryGeneratedColumn), repositories
- **Exercise type:** Read & explain — Claude walks through the tictactoe-api's entity files and explains how TypeORM maps TypeScript classes to database tables.

#### Lesson 4: Connecting NestJS to PostgreSQL

- **Objective:** Set up a database connection in a NestJS app and create your first entity.
- **Key concepts:** TypeORM module configuration, entity registration, database migrations, environment variables for connection strings
- **Exercise type:** Modify existing code — take the in-memory API from Week 6 and connect it to a real PostgreSQL database using TypeORM.

#### Lesson 5: Relationships Between Data

- **Objective:** Model relationships between tables (like "a user has many posts").
- **Key concepts:** One-to-many relationships, foreign keys, @ManyToOne / @OneToMany decorators, JoinColumn, querying related data
- **Exercise type:** Build from scratch — extend your database with a second table that relates to the first (like adding "reviews" to your "books" table).

#### Lesson 6: Full-Stack Checkpoint

- **Objective:** Build a complete app with a frontend, backend, and database working together.
- **Key concepts:** Full-stack architecture, frontend fetching data from backend, backend storing data in database, the request lifecycle
- **Exercise type:** Dream It + Vibe It + Study It + Own It — plan a full-stack app (journal, recipe book, or bookmark manager), have Claude build it, study the postmortem, then add a feature yourself. Use all four sandbox skills.

---

## Weeks 8-9: Frontend Frameworks — React, Next.js, State Management

*Focus: Building real UIs. Component thinking.*

You have been writing HTML and JavaScript by hand. Now you will learn React — the tool that professional developers use to build complex user interfaces. React lets you break a page into small, reusable pieces called components.

---

### Week 8: React Fundamentals

#### Lesson 1: What Is React and Why Use It?

- **Objective:** Understand what React does and why it is the most popular way to build web UIs.
- **Key concepts:** Components, declarative UI, virtual DOM, React vs plain JavaScript, JSX
- **Exercise type:** Read & explain — Claude compares building a todo list with plain JS (manual DOM updates) vs React (declare what it should look like, React handles updates). Reference the tictactoe app as a real React application.

#### Lesson 2: Your First React Component

- **Objective:** Create React components that display content on the page.
- **Key concepts:** Function components, JSX syntax, returning JSX, component hierarchy, importing/exporting components
- **Exercise type:** Build from scratch — create a profile card component that displays a name, bio, and list of skills.

#### Lesson 3: Props — Passing Data to Components

- **Objective:** Pass data into components using props so the same component can display different content.
- **Key concepts:** Props, TypeScript interfaces for props, passing props from parent to child, children prop
- **Exercise type:** Modify existing code — refactor your profile card to accept props, then render multiple cards with different data.

#### Lesson 4: State — Making Components Interactive

- **Objective:** Use useState to make components that respond to user actions.
- **Key concepts:** React hooks (introduction), useState hook, state updates, re-rendering, event handlers (onClick, onChange), controlled inputs
- **Exercise type:** Build from scratch — build a counter component with increment, decrement, and reset buttons. Then build a text input that shows a live character count.

#### Lesson 5: Side Effects with useEffect

- **Objective:** Use useEffect to run code when a component loads or when data changes.
- **Key concepts:** useEffect hook, dependency array, side effects (fetching data, timers, document title), cleanup functions
- **Exercise type:** Build from scratch — build a component that updates the browser tab title to show a count, and another that starts a timer when the component loads and cleans it up when it unmounts.

#### Lesson 6: Lists and Conditional Rendering

- **Objective:** Render lists of data and show or hide content based on conditions.
- **Key concepts:** .map() for rendering lists, key prop, conditional rendering (&&, ternary operator), showing/hiding elements
- **Exercise type:** Build from scratch — build a simple todo list where you can add items, mark them done (strikethrough), and toggle between showing all items vs only incomplete items. This is a mini project that combines components, props, state, lists, and conditionals. Plan the component hierarchy before you start building.

---

### Week 9: Next.js, Routing, and Data Fetching

#### Lesson 1: What Is Next.js?

- **Objective:** Understand what Next.js adds on top of React and why this codebase uses it.
- **Key concepts:** File-based routing, pages vs layouts, server components vs client components, the App Router
- **Exercise type:** Read & explain — Claude walks through the tictactoe app's file structure (`apps/tictactoe/src/app/`) and explains how each file maps to a page in the browser.

#### Lesson 2: Pages and Routing

- **Objective:** Create multiple pages in a Next.js app and navigate between them.
- **Key concepts:** page.tsx files, folder-based routes, layout.tsx, Link component, dynamic routes ([id])
- **Exercise type:** Build from scratch — create a multi-page site with a home page, an about page, and a contact page. Add a navigation bar that links between them.

#### Lesson 3: Dynamic Routes

- **Objective:** Create pages that change based on the URL (like /game/123 showing game #123).
- **Key concepts:** Dynamic route segments ([id]), useParams, fetching data based on URL parameters
- **Exercise type:** Modify existing code — reference how the tictactoe app uses dynamic routes for individual games, then build a simple blog with dynamic post pages (/posts/1, /posts/2).

#### Lesson 4: Fetching Data from Your API

- **Objective:** Connect your React frontend to your NestJS backend by fetching data.
- **Key concepts:** fetch API, useEffect for data fetching, loading states, error handling, displaying fetched data
- **Exercise type:** Feature challenge — connect a frontend to one of the APIs you built in Weeks 6-7. Display the data in a list and add a form to create new items.

#### Lesson 5: Forms and User Input

- **Objective:** Build forms that send data to your backend API.
- **Key concepts:** Controlled form inputs, form submission, preventDefault, POST requests from the frontend, optimistic updates
- **Exercise type:** Build from scratch — create a form that sends data to your API and updates the displayed list without refreshing the page.

#### Lesson 6: Styling with shadcn/ui

- **Objective:** Use pre-built, customizable UI components to make your app look professional.
- **Key concepts:** shadcn/ui component library, installing components (Button, Card, Input, Dialog), customizing with Tailwind, composing UI from pre-built pieces
- **Exercise type:** Modify existing code — take a project you have built and upgrade the UI using shadcn/ui components. Reference how the tictactoe app uses shadcn/ui.

---

## Weeks 10-11: Security, Auth, Testing, Solo Project

*Focus: Making things production-ready. Build something on your own.*

Real apps need to be secure and reliable. These lessons teach you how to protect your app from common attacks, add user accounts, and write tests to make sure things work.

---

### Week 10: Security, Authentication, and Testing

#### Lesson 1: Web Security Basics

- **Objective:** Understand the most common security vulnerabilities and how to prevent them.
- **Key concepts:** Input validation, XSS (Cross-Site Scripting), SQL injection, sanitizing user input, why security matters
- **Exercise type:** Read & explain — Claude demonstrates a simple XSS attack on an unprotected page, then shows how to prevent it. Reference the security patterns in the tictactoe-api's secure refactor (`apps/tictactoe-api`).

#### Lesson 2: Environment Variables and Secrets

- **Objective:** Keep sensitive information (API keys, database passwords) out of your code.
- **Key concepts:** .env files, process.env, .gitignore, why secrets should never be committed, environment variable naming conventions
- **Exercise type:** Modify existing code — audit an app for hardcoded secrets and move them to environment variables. Reference how the tictactoe-api handles configuration.

#### Lesson 3: Authentication — What It Is and How It Works

- **Objective:** Understand how apps know who is logged in and how login systems work.
- **Key concepts:** Authentication vs authorization, sessions, JWT (JSON Web Tokens), hashing passwords, login flow
- **Exercise type:** Read & explain — Claude walks through a login flow step by step: user enters password, server checks it, server sends back a token, frontend stores the token and sends it with future requests.

#### Lesson 4: Adding Auth to a NestJS App

- **Objective:** Implement basic authentication in a backend API using guards and JWT.
- **Key concepts:** NestJS guards, JWT strategy, protecting endpoints, @UseGuards decorator, extracting user from token
- **Exercise type:** Dream It + Vibe It + Study It — have Claude add authentication to one of your existing APIs, then study how it works.

#### Lesson 5: Introduction to Testing

- **Objective:** Write your first automated tests to verify that your code works correctly.
- **Key concepts:** Unit tests, test runners (Jest), describe/it/expect, testing functions, why testing matters
- **Exercise type:** Build from scratch — write tests for the calculator functions from Week 3. Test normal cases, edge cases (dividing by zero), and unexpected input.

#### Lesson 6: Testing APIs and Components

- **Objective:** Write tests for backend endpoints and React components.
- **Key concepts:** API testing (supertest), component testing (React Testing Library), mocking, test setup/teardown
- **Exercise type:** Feature challenge — write tests for an existing app in the sandbox. Start with the simplest function and work up to testing an API endpoint.

---

## Week 11: Solo Project Sprint

*Focus: Build something on your own from start to finish.*

This entire week is dedicated to your solo project. You will go through the full learning flow yourself — but this time, YOU are the developer.

---

#### Lesson 1: Solo Project — Dream It

- **Objective:** Plan your own project from scratch by writing a PRD.
- **Key concepts:** Requirements gathering, scoping a project, user stories, defining MVP (Minimum Viable Product)
- **Exercise type:** Dream It — use `/prd` to create a blueprint for a project YOU choose. Claude helps you scope it but you make the decisions. Aim for something you can build in 4-5 days.

#### Lesson 2: Solo Project — Set Up and Data Model

- **Objective:** Scaffold your project and define the data model.
- **Key concepts:** Project scaffolding, entity design, database tables, planning API endpoints before building
- **Exercise type:** Own It — you create the folder structure, entity files, and database setup. Claude tutors you through it but does not write the code.

#### Lesson 3: Solo Project — Build the Backend

- **Objective:** Implement your API endpoints with full CRUD operations.
- **Key concepts:** Controllers, services, repositories, request validation, error handling
- **Exercise type:** Own It — you write the NestJS controller and service. Claude gives hints when you are stuck but lets you work through problems.

#### Lesson 4: Solo Project — Build the Frontend

- **Objective:** Create the UI for your app and connect it to your backend.
- **Key concepts:** Component architecture, data fetching, forms, state management, routing
- **Exercise type:** Own It — you build the React components and connect them to your API. Reference the tictactoe app for patterns you need.

#### Lesson 5: Solo Project — Polish and Test

- **Objective:** Add finishing touches, fix bugs, and write tests.
- **Key concepts:** Bug fixing, error states, loading states, edge cases, writing tests for your own code
- **Exercise type:** Own It — you write tests, handle error cases, and improve the UI. Claude helps you identify what to test.

#### Lesson 6: Solo Project — Postmortem and Presentation

- **Objective:** Review what you built, what you learned, and present your project.
- **Key concepts:** Code review, self-reflection, explaining technical decisions, identifying what you would do differently
- **Exercise type:** Study It — use `/postmortem` on your own project to generate a learning guide, then practice explaining what you built and why you made the choices you made.

---

## Weeks 12-13: Group Projects, DevOps, Advanced Topics

*Focus: Working with others. Deployment. Real-world patterns.*

In the real world, software is built by teams. These two weeks teach you the tools and practices that professional developers use to collaborate and ship code.

---

### Week 12: Collaboration and DevOps

#### Lesson 1: Git for Teams

- **Objective:** Use Git branches, pull requests, and code reviews to collaborate without stepping on each other's code.
- **Key concepts:** Branches, pull requests (PRs), code review, merge conflicts, feature branch workflow
- **Exercise type:** Build from scratch — create a branch, make changes, open a pull request on GitHub, and walk through the review process with Claude.

#### Lesson 2: Git Workflows in Practice

- **Objective:** Practice the full Git workflow: branch, commit, push, review, merge.
- **Key concepts:** git checkout -b, git push -u origin, resolving merge conflicts, writing good commit messages, PR descriptions
- **Exercise type:** Feature challenge — pick a feature for an existing app, implement it on a branch, and submit a PR. Claude reviews your PR and gives feedback.

#### Lesson 3: Monorepo Structure

- **Objective:** Understand how this monorepo is organized and why multiple apps share one repository.
- **Key concepts:** Monorepo vs multi-repo, workspaces (pnpm), Turborepo, shared packages, the apps/ and packages/ folders
- **Exercise type:** Read & explain — Claude walks through the sandbox's root package.json, turbo.json, and folder structure, explaining how everything connects.

#### Lesson 4: Environment Setup and Docker Basics

- **Objective:** Understand how to set up a consistent development environment that works on any computer.
- **Key concepts:** Docker containers, docker-compose, environment setup, containerized databases, why "it works on my machine" is a problem
- **Exercise type:** Read & explain — Claude explains Docker using a shipping container analogy (everything your app needs, packaged into one box that runs the same everywhere).

#### Lesson 5: CI/CD — Automated Testing and Deployment

- **Objective:** Understand how code gets from your computer to a live website automatically.
- **Key concepts:** Continuous Integration (CI), Continuous Deployment (CD), GitHub Actions, automated tests, build pipelines
- **Exercise type:** Read & explain + modify — Claude explains a GitHub Actions workflow file, then you add a step that runs your tests automatically on every pull request.

#### Lesson 6: Deployment — Putting Your App on the Internet

- **Objective:** Deploy a Next.js app so anyone with the URL can use it.
- **Key concepts:** Hosting platforms (Vercel, Railway), environment variables in production, build process, domain names, HTTPS
- **Exercise type:** Build from scratch — deploy one of your frontend apps to Vercel. Claude walks you through each step.

---

### Week 13: Advanced Patterns and Real-World Skills

#### Lesson 1: Error Handling Patterns

- **Objective:** Handle errors gracefully so your app does not crash or show confusing messages to users.
- **Key concepts:** Try/catch, error boundaries (React), HTTP error responses, user-friendly error messages, logging
- **Exercise type:** Modify existing code — add proper error handling to an existing app. Handle network failures, invalid input, and server errors.

#### Lesson 2: State Management Beyond useState

- **Objective:** Manage complex state that is shared across multiple components.
- **Key concepts:** useReducer, React Context, when to use which approach, prop drilling problem, global vs local state
- **Exercise type:** Modify existing code — refactor an app that passes state through many levels of props to use Context instead.

#### Lesson 3: API Design Best Practices

- **Objective:** Design APIs that are consistent, predictable, and easy to use.
- **Key concepts:** RESTful naming conventions, pagination, filtering, sorting, API versioning, error response format
- **Exercise type:** Read & explain + modify — Claude reviews an API you have built and suggests improvements based on REST best practices. You implement the improvements.

#### Lesson 4: Performance Basics

- **Objective:** Identify and fix common performance problems in web apps.
- **Key concepts:** React.memo, useMemo, useCallback, lazy loading, code splitting, why re-renders happen
- **Exercise type:** Read & explain — Claude demonstrates a slow component, explains why it is slow (unnecessary re-renders), and shows how to fix it.

#### Lesson 5: Accessibility (a11y)

- **Objective:** Make your apps usable by everyone, including people who use screen readers or keyboard navigation.
- **Key concepts:** Semantic HTML, aria labels, keyboard navigation, color contrast, alt text, focus management
- **Exercise type:** Modify existing code — audit an existing app for accessibility issues and fix them. Test with keyboard-only navigation.

#### Lesson 6: WebSockets and Real-Time Features

- **Objective:** Build features that update instantly without refreshing the page.
- **Key concepts:** WebSockets, real-time communication, Socket.io, events, broadcasting updates
- **Exercise type:** Read & explain — Claude explains how the tictactoe app uses WebSockets for real-time multiplayer. Reference `apps/tictactoe` and `apps/tictactoe-api` for the WebSocket implementation.

---

## Week 14: Portfolio, Interview Prep, and Architecture

*Focus: Presenting your work. Understanding the big picture.*

You have spent 13 weeks building real software. This final week is about stepping back, seeing the big picture, and preparing to show the world what you can do.

---

#### Lesson 1: Building Your Portfolio

- **Objective:** Create a portfolio page that showcases the projects you have built in this bootcamp.
- **Key concepts:** Portfolio structure, project descriptions, screenshots, linking to GitHub repos, telling a story about your work
- **Exercise type:** Build from scratch — create a portfolio page using Next.js and Tailwind that displays your projects with descriptions, tech stacks used, and links.

#### Lesson 2: Code Review Skills

- **Objective:** Read and give feedback on other people's code like a professional developer.
- **Key concepts:** What to look for in a code review (readability, correctness, style), constructive feedback, common issues, reading unfamiliar code
- **Exercise type:** Feature challenge — Claude provides code for you to review. You identify bugs, suggest improvements, and explain your reasoning.

#### Lesson 3: Technical Interview Basics

- **Objective:** Solve simple coding problems and explain your thought process out loud.
- **Key concepts:** Problem decomposition, pseudocode, talking through your approach, common patterns (string manipulation, array operations, object lookups)
- **Exercise type:** Build from scratch — solve 3 coding challenges while explaining your approach step by step. Practice saying "First I would..., then I would..." out loud.

#### Lesson 4: System Design for Beginners

- **Objective:** Understand how the pieces of a web application fit together at a high level.
- **Key concepts:** Frontend/backend/database architecture, API as the glue, where data lives, request flow from browser to database and back
- **Exercise type:** Read & explain — Claude asks you to draw (on paper or a whiteboard) the architecture of one of your apps: which parts are the frontend, backend, and database, and how they communicate.

#### Lesson 5: What to Learn Next

- **Objective:** Understand the broader landscape of software development and choose your next learning path.
- **Key concepts:** Mobile development, cloud services (AWS), AI/ML integration, DevOps engineering, frontend specialization, backend specialization
- **Exercise type:** Read & explain — Claude presents different career paths in software engineering and helps you identify which ones match your interests based on what you enjoyed most in this bootcamp.

#### Lesson 6: Capstone Presentation

- **Objective:** Present your best project to an audience (real or simulated) and answer questions about your technical decisions.
- **Key concepts:** Technical presentations, demo preparation, anticipating questions, talking about tradeoffs, celebrating your growth
- **Exercise type:** Own It — prepare a 5-minute presentation of your best project. Practice explaining: what it does, why you built it that way, what you would change, and what you learned. Claude simulates an audience and asks you questions.
