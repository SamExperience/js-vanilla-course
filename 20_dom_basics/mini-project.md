# Mini-project 1 — FizzBuzz

**Prerequisites:** topics 01 → 20.
**Repo to create:** `js-fizzbuzz` (public).
**Setup and git:** [PUBLISHING_GUIDE.md](../PUBLISHING_GUIDE.md) — read it once, now.

## The brief

A page that, on load, shows the numbers from 1 to 100, one per row, with three
substitutions:

- multiples of 3 → `Fizz`
- multiples of 5 → `Buzz`
- multiples of 15 → `FizzBuzz`

No input, no buttons. It calculates and displays, once, when the page opens.

## Requirements

- [ ] A function `fizzBuzz(n)` that **returns an array** and never touches the page
- [ ] Rendering lives outside that function, and reads its return value
- [ ] Scaffolded with `npm create vite@latest . -- --template vanilla`
- [ ] No unused file left over from the Vite scaffold — `src/counter.js`,
      `src/assets/`, `public/icons.svg` and the boilerplate CSS all go

The first requirement is the real one. Separating "work out the answer" from "put it on
screen" is the habit every later project depends on.

## Constraints

By this point the course has taught you the whole language, so nothing here is out of
reach. That makes restraint the actual skill: a brief this small is finished when it
does what it says, not when you have used everything you know.

- Keep the logic in `fizzBuzz(n)` and the rendering outside it. That separation is the
  requirement; everything else is detail.
- No framework, no library, no CSS framework. Plain JavaScript and plain CSS.
- No classes, no `Map`, no regular expressions. All three would work, and all three
  would be a longer way to write a loop with three conditions in it.

## Done when

- [ ] `fizzBuzz(15)` returns exactly
      `['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']`
- [ ] The page shows 100 rows, and the browser console is clean
- [ ] `npm run build` completes with no errors
- [ ] README written and the repo is pushed — see the guide's final checklist

## If you get stuck

Reread `02_operators` (the `%` operator), `04_loops` (the counting loop) and
`20_dom_basics` (`createElement`, `textContent`). The trap here is
ordering: test for multiples of 15 **first**, or a multiple of 15 is caught by the
`Fizz` branch and never reaches `FizzBuzz`.

Do not look this up online. It is a famous exercise with a thousand published answers,
and every one of them costs you the only thing this repo is worth.

## Check your work

When you think you are finished — not before, and not instead of the checklist above —
open a new session with your AI assistant and paste **three things**: `review-prompt.txt`
from this folder, the whole of this file, and your code.

The file carries the requirements and constraints, so the assistant reviews you against
this brief rather than its own idea of what a project should look like. It will point
at what is wrong without fixing it for you. If it finds nothing, you are done: write
the README and push.
