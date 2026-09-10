# 24 — Final project

No notebook, no new theory. Everything you need has already been taught: modules,
fetch, async, DOM, events, the data → render loop, separation of concerns. This is
also the handover to React — the architecture you build here is the one a real React
project uses, under different names.

## What to build

A **user directory with search**:

1. On load, fetch `https://jsonplaceholder.typicode.com/users`.
2. Show each user in a card: name, email, city (`user.address.city`).
3. A search field filters the list **as you type**, by name.
4. Handle three states: loading, error, and no results.

## Architecture rules

These are the point of the exercise, not decoration:

```
project/src/
  main.js        wires things together — no real logic here
  services/      talks to the network. Knows URLs, knows no DOM
  logic/         pure functions: data in, data out. No fetch, no document
  ui/            everything that touches the DOM
```

Each folder holds a `README.md` reminding you what belongs in it.

**The test:** `logic/filter-by-name.js` must run with no browser and no network. If you
need to open a page to try it, it is in the wrong folder.

## Path

Build in this order — after every step you have something that works.

**1. `services/`** — write `users-service.js` with `fetchUsers()`. Call it from
`main.js` and `console.log` the result.
*Done when:* the array of 10 users appears in the console.

**2. `ui/`** — given an array of users, build the cards and put them on the page. No
filtering yet.
*Done when:* 10 cards show name, email and city.

**3. `logic/`** — write `filter-by-name.js`: array in, filtered array out. No
`document`, no `fetch`.
*Done when:* calling it by hand with `"mia"` returns only the matching users.

**4. `main.js`** — add the search field, listen for `input`, filter, re-render, then
add the loading, error and no-results states.
*Done when:* typing narrows the list live.

## Where to build it

**In your own repository, not in `project/`.** This is the last project of the course
and the first one worth showing, so it starts from an empty folder like any real
project would. `project/` here holds nothing but the folder layout and three notes
about what belongs where — recreate that layout in your repo.

[mini-project.md](mini-project.md) has the repo name, the checklist and the setup
steps.

## If you get stuck

Paste `ai-prompt.txt` into a new session with an AI assistant: for this project it acts
as an architecture guide, not a code generator.
