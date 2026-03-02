# Glossary

Plain-English definitions for terms you will encounter in this sandbox.

---

**API (Application Programming Interface)**
A way for two programs to talk to each other. When the frontend needs data from the backend, it sends a request to the API and gets a response back. Think of it like a waiter taking your order to the kitchen and bringing back your food.

**Backend**
The part of an app that runs on a server, not in the browser. It handles data storage, business logic, and security. Users never see the backend directly — they interact with it through the frontend.

**Branch**
A separate copy of the code within a Git repository where you can make changes without affecting the main version. Like making a draft of an essay before replacing the original.

**CLI (Command Line Interface)**
A way to interact with your computer by typing text commands instead of clicking buttons. The terminal is a CLI.

**Clone**
To download a copy of a Git repository to your computer. The command is `git clone <url>`.

**Commit**
A saved snapshot of your code at a specific point in time. Like saving a version of a document. Each commit has a message describing what changed.

**Component**
A reusable building block in React. A button, a form, a sidebar — each can be a component. Components can contain other components, like nesting boxes.

**CSS (Cascading Style Sheets)**
The language that controls how a web page looks — colors, fonts, spacing, layout. In this sandbox, we use Tailwind CSS, which lets you write styles directly in your HTML using short class names.

**Database**
A structured place to store data permanently. When you close the app and open it later, the data is still there because it lives in the database, not in the browser. This sandbox uses PostgreSQL.

**Dependency**
A code library that your project uses. Instead of writing everything from scratch, you install dependencies that other people have built. `pnpm install` downloads all of them.

**Endpoint**
A specific URL on a server that does something when you send a request to it. For example, `POST /api/games` creates a new game. Each endpoint is like a specific counter at a post office — you go to the right one for what you need.

**Frontend**
The part of an app that runs in the browser — what the user sees and interacts with. Buttons, text, images, forms — all frontend.

**Function**
A reusable block of code that does a specific job. You give it input, it does something, and it gives you output. Like a recipe: ingredients go in, a dish comes out.

**Git**
A tool that tracks changes to your code over time. It lets you save versions, undo mistakes, and collaborate with others. Nearly every software project uses Git.

**Hook**
A special function in React that lets components "hook into" features like state and side effects. The most common ones are `useState` (to remember data) and `useEffect` (to do something when data changes).

**HTML (HyperText Markup Language)**
The language that defines the structure of a web page — headings, paragraphs, buttons, links, images. Every web page is built on HTML.

**HTTP (HyperText Transfer Protocol)**
The system that web browsers and servers use to communicate. When your browser loads a page, it sends an HTTP request and the server sends back an HTTP response.

**JavaScript**
The programming language that makes web pages interactive. When you click a button and something happens, that is JavaScript running. It works in browsers and on servers (via Node.js).

**JSON (JavaScript Object Notation)**
A way to format data as text that both humans and computers can read. It looks like this: `{ "name": "Alice", "age": 16 }`. APIs use JSON to send data back and forth.

**JSX**
A syntax that lets you write HTML-like code inside JavaScript. It is what React components return. It looks like HTML but it is actually JavaScript underneath.

**Middleware**
Code that runs between receiving a request and sending a response. It can check things (like authentication), modify data, or log information. Like a security checkpoint between the entrance and the main building.

**Migration**
A file that describes a change to the database structure (like adding a new table or column). Migrations run in order so every developer's database stays in sync.

**Module**
A self-contained piece of code that groups related functionality together. In NestJS, modules organize controllers, services, and other pieces into logical units.

**Monorepo**
A single repository (code project) that contains multiple apps and shared packages. This sandbox is a monorepo — all the apps live under one roof.

**NestJS**
A Node.js framework for building backend applications. It provides structure for organizing your code into modules, controllers, and services.

**Next.js**
A React framework that adds features like file-based routing (each file becomes a page) and server-side rendering. The frontend apps in this sandbox use Next.js.

**Node.js**
A tool that lets you run JavaScript outside of a web browser — on your computer or a server. It powers the backend apps and development tools in this sandbox.

**npm / pnpm**
Package managers for JavaScript. They download and manage dependencies. pnpm is a faster alternative to npm. Both use the same package registry.

**Package**
A bundle of code that can be shared and reused. When you `pnpm install`, you are downloading packages. Libraries like React and Tailwind are packages.

**PostgreSQL**
A database system that stores data in tables with rows and columns (like a spreadsheet, but much more powerful). The backend apps in this sandbox use PostgreSQL.

**PRD (Product Requirements Document)**
A blueprint that describes what an app should do, who it is for, and what features it needs. In this sandbox, you create PRDs before Claude builds your app.

**Props**
Short for "properties." Data that gets passed from a parent component to a child component in React. Like handing a note to someone — the parent decides what to write, the child decides how to display it.

**React**
A JavaScript library for building user interfaces. You describe what the page should look like based on the current data (state), and React handles updating the screen when the data changes.

**Repository (Repo)**
A project tracked by Git. It contains all the code, history, and configuration for a project. This sandbox is a repository.

**REST (Representational State Transfer)**
A style of designing APIs where each URL represents a resource, and you use HTTP methods to interact with it. `GET /api/games` fetches games, `POST /api/games` creates one.

**Route**
A URL path that maps to a specific page or API endpoint. In Next.js, the file `app/game/[id]/page.tsx` creates a route at `/game/123`.

**State**
Data that a component keeps track of and that can change over time. When state changes, React re-renders (redraws) that part of the page. Think of it like a scoreboard — when the score changes, the display updates.

**Tailwind CSS**
A CSS framework that lets you style elements using short class names directly in your HTML. Instead of writing CSS in a separate file, you write `className="text-blue-500 font-bold"` right on the element.

**Terminal**
A text-based interface for interacting with your computer. You type commands and the computer responds with text output. Also called "command line" or "shell."

**TypeScript**
JavaScript with type safety added. It lets you specify what kind of data a variable should hold (string, number, etc.), which catches mistakes before your code runs. All the code in this sandbox is TypeScript.

**URL (Uniform Resource Locator)**
A web address. `http://localhost:2025` is a URL that points to the tictactoe app running on your computer.

**Variable**
A named container that holds a value. Like a labeled box — you put something in it, and you can get it out later by using the label.

**WebSocket**
A way for the browser and server to keep a constant, two-way connection open. Unlike normal HTTP (ask a question, get an answer, hang up), WebSockets stay connected so the server can send updates instantly. Used for real-time features like multiplayer games.
