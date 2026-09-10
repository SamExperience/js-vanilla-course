# 22 — Forms & dynamic lists (LESSON 46)

The loop that runs every real interface: **data → render → an event changes the data →
render again**. You never patch ten parts of the page by hand; you change the data and
redraw. This is how React thinks, without React.

## Path

**1. Read the lesson** — `forms_lists.ipynb`. A runnable cell shows the data → render
loop working with no browser at all.

**2. Run the project, then read the demo** — `npm install` (first time), then
`npm run dev` inside `project/`. Open `src/lessons/lesson-46-forms-lists.js`: it builds
the *colours* box with exactly that loop. Add a colour, try a duplicate, click one to
remove it.

**3. Do the exercise** — `src/exercise/exercise.js` holds **6 numbered STEPs**, each
with a `// Check:` line telling you how to verify it before moving on.

**Done when:** you can add several tasks, an empty submit shows a message instead of
adding anything, and clicking any task removes the right one — still correct after a
few adds and removes.

## If you get stuck

Paste `ai-prompt.txt` into a new session with an AI assistant.
`src/exercise/solution.js` is a last resort.

## Structure

```
forms_lists.ipynb                 the lesson (theory)
mini-project.md                   your second public repo — read it after the exercise
review-prompt.txt                 prompt to have your finished repo reviewed
project/src/
  lessons/lesson-46-...           live demo, already written
  exercise/exercise.js            ← you write here
  exercise/solution.js            solution
```

## Mini-project

[mini-project.md](mini-project.md) — a list you filter as you type, in your own repo.
