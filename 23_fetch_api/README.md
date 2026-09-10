# 23 — Fetch & APIs (LESSON 48)

The data now lives on a server and arrives late. Three states to handle — **loading,
success, error** — and a `services/` split: the file that talks to the network knows
nothing about the page.

## Path

**1. Read the lesson** — `fetch_api.ipynb`. These cells **really run**: `fetch` works
inside the kernel, so you call a real API before touching the DOM. One cell shows the
404 trap live.

**2. Run the project, then read the demo** — `npm install` (first time), then
`npm run dev` inside `project/`. Press **F12** and watch the **Network** tab, not only
the console. Two files, and the split between them *is* the lesson:
`src/services/users-service.js` holds the URLs; `src/lessons/lesson-48-fetch.js` is the
page and has none. Click both demo buttons, the broken one included.

**3. Do the exercise** — `src/exercise/exercise.js` holds **6 numbered STEPs**, each
with a `// Check:` line. STEP 1 has you write your own service file.

**Done when:** clicking shows "Loading…", then 10 titles appear — and breaking the URL
on purpose shows an error message instead of a blank page.

## The two traps

- `fetch` does **not** throw on 404 or 500. You must check `response.ok` yourself.
- `response.json()` is itself asynchronous. It needs its own `await`.

## If you get stuck

Paste `ai-prompt.txt` into a new session with an AI assistant.
`src/exercise/solution.js` is a last resort.

## Structure

```
fetch_api.ipynb                   the lesson (runnable cells, real network calls)
mini-project.md                   your third public repo — read it after the exercise
review-prompt.txt                 prompt to have your finished repo reviewed
project/src/
  services/users-service.js       talks to the network, never touches the DOM
  services/posts-service.js       ← you create this one in STEP 1
  lessons/lesson-48-fetch.js      live demo, knows no URLs
  exercise/exercise.js            ← you write here
  exercise/solution.js            solution
```

## Mini-project

[mini-project.md](mini-project.md) — a live market dashboard, in your own repo.
