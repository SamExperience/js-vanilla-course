# Mini-project 2 — Filtered user list

**Prerequisites:** topics 01 → 22.
**Repo to create:** `js-list-filter` (public).
**Setup and git:** [PUBLISHING_GUIDE.md](../PUBLISHING_GUIDE.md).

## The brief

A page showing a list of users from a static dataset, in two sections:

- **All users** — everyone
- **Admins** — only those with `isAdmin: true`

Above them, a search field that filters both lists **by name, as you type**.

Mini-project 1 rendered numbers you calculated. This one renders objects you were
given, and re-renders them whenever the user types — the data → render loop from
LESSON 46, with the data now coming from a file instead of a form.

## Requirements

- [ ] The dataset lives in its own module (`src/data.js`) and is imported, not pasted
      into `main.js`
- [ ] At least 6 users, mixing admins and non-admins
- [ ] The two sections derive from the **same** array — `filter` for the admin one
- [ ] The search field filters on the `input` event, not on a button click
- [ ] Searching for a name that matches nothing shows a message, not an empty page

## Constraints

By this point the course has taught you the whole language, so nothing here is out of
reach. That makes restraint the actual skill: a brief this small is finished when it
does what it says, not when you have used everything you know.

- The original array is never modified. Every view is a new array derived from it. If
  your list cannot grow back as you delete characters, you mutated the source.
- No `fetch`. The data is static and local, and keeping it that way is the point of
  this checkpoint.
- No `sort` on the rendered list: the order is the order the data came in.
- Plain JavaScript and plain CSS. No framework, no library.

## Done when

- [ ] Adding a user to `src/data.js` and reloading updates both lists
- [ ] The admin section count matches the admins in the dataset, counted by hand
- [ ] Typing narrows both lists live; clearing the field restores them in full
- [ ] A search with no matches shows the empty-state message
- [ ] `npm run build` passes and the console is clean
- [ ] README written and the repo is pushed

## If you get stuck

Reread `10_array_methods` (`map`, `filter`) and `22_dom_forms_lists` (the data →
render loop). The question that unblocks most people here: which array is the source of
truth, and which one exists only to be drawn?

## Check your work

When you think you are finished — not before, and not instead of the checklist above —
open a new session with your AI assistant and paste **three things**: `review-prompt.txt`
from this folder, the whole of this file, and your code.

The file carries the requirements and constraints, so the assistant reviews you against
this brief rather than its own idea of what a project should look like. It will point
at what is wrong without fixing it for you. If it finds nothing, you are done: write
the README and push.
