# Mini-project 4 — User directory

**Prerequisites:** the whole course, topics 01 → 24.
**Repo to create:** `js-user-directory` (public).
**Setup and git:** [PUBLISHING_GUIDE.md](../PUBLISHING_GUIDE.md).

This one is different: **build it in your own repository from the start**, not in
`project/`. There is no scaffold waiting for you, no `exercise.js` with STEPs, and no
solution file. That is the point — it is the last thing you do before React, and the
first thing worth showing.

`project/` here holds only the folder layout and three notes about what belongs where.
Recreate that layout in your repo; do not copy code from it, because there is none.

## The brief

Everything described in [README.md](README.md) — a searchable user directory over
`https://jsonplaceholder.typicode.com/users`, built to the `services/` · `logic/` ·
`ui/` split.

Follow the four-step order in that README (services → ui → logic → main). It is the
order that keeps you unstuck: after each step something visibly works.

## Requirements

- [ ] Fetches the users on load and renders a card each: name, email, city
- [ ] Search field filters by name as you type
- [ ] Loading, error and no-results states all handled
- [ ] `main.js` wires things together and holds no real logic — if it passes about 20
      lines of logic, something belongs in one of the three folders
- [ ] `logic/filter-by-name.js` contains no `fetch` and no `document`
- [ ] Search is case-insensitive

## Constraints

By this point the course has taught you the whole language, so nothing here is out of
reach. That makes restraint the actual skill: a brief this small is finished when it
does what it says, not when you have used everything you know.

- No framework, no library, no CSS framework. This is the last vanilla project, so let
  it be vanilla.
- The fetched array is never modified. Filtering derives a new array for rendering.
- `logic/` may not import from `ui/` or `services/`. The arrows point one way.

## Done when

- [ ] Ten cards appear on load, each with name, email and city
- [ ] Typing narrows the list live; clearing it restores all ten
- [ ] A search matching nothing shows a message distinguishable from an error
- [ ] Breaking the URL on purpose shows the error state, not a blank page
- [ ] `filter-by-name.js` gives correct results when called by hand in the console,
      with no page rendered — this is the test that the architecture is real
- [ ] `npm run build` passes and the console is clean
- [ ] The README explains the three-folder split and why it exists
- [ ] The repo is pushed

## If you get stuck

Paste `ai-prompt.txt` into a new session with an AI assistant: for this project it acts
as an architecture guide, not a code generator.

If you cannot decide where a piece of code belongs, ask what it needs in order to run.
If the honest answer includes "a browser", it belongs in `ui/`. If it includes "the
internet", it belongs in `services/`. If it needs neither, it belongs in `logic/`.

## Check your work

When you think you are finished — not before, and not instead of the checklist above —
open a new session with your AI assistant and paste **three things**: `review-prompt.txt`
from this folder, the whole of this file, and your code.

The file carries the requirements and constraints, so the assistant reviews you against
this brief rather than its own idea of what a project should look like. It will point
at what is wrong without fixing it for you. If it finds nothing, you are done: write
the README and push.
