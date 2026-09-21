# 21 — DOM events (LESSON 45)

How the page reacts: listeners, the event object, one listener that serves many
elements, and the keyboard.

## Path

**1. Read the lesson** — `dom_events.ipynb`. It has a runnable cell on the classic
mistake of this topic: passing a function versus calling it.

**2. Run the project, then read the demo** — `npm install` (first time), then
`npm run dev` inside `project/`. Press **F12**: the demo logs to the console. Open
`src/lessons/lesson-45-dom-events.js` and click around the page while watching the
console. Try the list (delegation) and the link (`preventDefault`).

**3. Do the exercise** — `src/exercise/exercise.js` holds **7 numbered STEPs**, each
with a `// Check:` line. One STEP at a time, checking the browser after each.
STEPs 1-4 build the theme toggle, STEPs 5-6 add delegation with `closest()`, and
STEP 7 clears the highlights from the keyboard.

**Done when:** clicking flips the colours, the label alternates between
"Switch to dark" and "Switch to light" — always naming the next action —
clicking any list item highlights it, including the row whose text sits inside a
`<span>`, and pressing Escape clears every highlight.

## If you get stuck

Paste `ai-prompt.txt` into a new session with an AI assistant.
`src/exercise/solution.js` is a last resort.

## Structure

```
dom_events.ipynb                  the lesson (theory)
project/src/
  lessons/lesson-45-...           live demo, already written
  exercise/exercise.js            ← you write here
  exercise/solution.js            solution
```

Delegation is not decoration: you need it in LESSON 46, where the `<li>` elements
are created *after* the listener is already in place.
