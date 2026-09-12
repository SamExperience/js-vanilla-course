# JS Vanilla — intensive mini course

A hands-on JavaScript course built from short lessons (~5 minutes each), in two phases:

1. **Language fundamentals** → Jupyter notebooks running a JavaScript kernel. Theory to
   read, plus cells where you write code — just like Python notebooks.
2. **DOM and real projects** → vanilla Vite projects in the browser, one per topic, so
   you get used to folder structure and separation of concerns before React.

Nineteen topics cover the language itself, five cover the browser. Forty-eight lessons
in total, each about five minutes.

Along the way, four **mini-projects** that you build in your own public GitHub
repositories. See [Two kinds of exercise](#two-kinds-of-exercise) below.

## Setup (one time only)

The notebooks run on the **Deno** kernel, the only actively maintained JavaScript
kernel for Jupyter.

```powershell
winget install DenoLand.Deno
deno jupyter --install
jupyter kernelspec list      # should list "deno"
```

To open the notebooks:

- **JupyterLab** (already installed): run `jupyter lab` from this folder.
- **VS Code**: install these two extensions:
  ```powershell
  code --install-extension ms-toolsai.jupyter
  code --install-extension denoland.vscode-deno
  ```
  - `ms-toolsai.jupyter` is **required** — it is what lets VS Code open `.ipynb` files
    at all.
  - `denoland.vscode-deno` is optional — it only helps when editing `.ts`/`.js` files
    outside notebooks.

  Then restart (or reload) VS Code, open a notebook, and click **Select Kernel** in the
  top-right corner. Pick **Jupyter Kernel...** (not "Python Environments"), then pick
  **Deno**.

> The kernel identifies itself as `typescript` — that is expected. Valid JavaScript is
> also valid TypeScript, and the cells are not type-checked.

## Table of contents

### Language fundamentals — notebooks

| # | Topic | Lessons |
|---|---|---|
| 01 | `01_variables` | LESSON 1-6 — let/const, string, number, boolean, null/undefined, typeof |
| 02 | `02_operators` | LESSON 7-9 — arithmetic, comparison, logical, assignment |
| 03 | `03_conditions` | LESSON 10-13 — if/else, else if, switch, ternary |
| 04 | `04_loops` | LESSON 14-18 — for, while, break/continue, for...of, for...in |
| 05 | `05_functions` | LESSON 19-21 — parameters, return, defaults, rest, arrow functions, callbacks, closures |
| 06 | `06_strings` | LESSON 22-23 — searching, slicing, template literals, split/join, replace, trim |
| 07 | `07_numbers_math` | LESSON 24 — Number/parseInt, NaN, toFixed, rounding, Math |
| 08 | `08_arrays` | LESSON 25-26 — indexes, push/pop/shift/unshift, sort, slice/splice, concat/join |
| 09 | `09_objects` | LESSON 27-28 — dot vs bracket, nesting, Object.keys/values/entries, spread, getters |
| 10 | `10_array_methods` | LESSON 29-30 — forEach, map, filter, find, reduce, some, every, findLast, flat, chaining, sorting by field, Object.groupBy |
| 11 | `11_destructuring_spread` | LESSON 31 — destructuring, rest, spread, copy by reference |
| 12 | `12_modern_syntax` | LESSON 32 — optional chaining `?.`, nullish `??`, logical assignment |
| 13 | `13_classes` | LESSON 33-34 — class, constructor, this, static, extends, super, prototypes |
| 14 | `14_maps_sets` | LESSON 35-36 — Map, Set, WeakMap, WeakSet, Symbol, BigInt |
| 15 | `15_dates_json` | LESSON 37-38 — Date, Intl formatting, JSON.parse/stringify |
| 16 | `16_regex` | LESSON 39 — patterns, test/match/replace, groups, flags |
| 17 | `17_modules` | LESSON 40 — export/import, named vs default |
| 18 | `18_errors` | LESSON 41 — throw, Error, custom error classes, try/catch/finally |
| 19 | `19_async` | LESSON 42-43 — Promise, async/await, .then, Promise.all, timers |

### Browser and projects — Vite

| # | Topic | Lesson | Exercise | Mini-project |
|---|---|---|---|---|
| 20 | `20_dom_basics` | LESSON 44 — querySelector, textContent, classList, createElement | click counter | **`js-fizzbuzz`** |
| 21 | `21_dom_events` | LESSON 45 — addEventListener, event.target, closest, delegation, keys | theme toggle | — |
| 22 | `22_dom_forms_lists` | LESSON 46-47 — submit, validation, data loop → render, template | to-do list | **`js-list-filter`** |
| 23 | `23_fetch_api` | LESSON 48 — fetch, loading/error, separate services, localStorage | list from API | **`js-market-dashboard`** |
| 24 | `24_final_project` | — | — | **`js-user-directory`** |

`LESSON N` numbering runs continuously across the whole course — it does not restart
for each topic.

The final project introduces no new syntax: it puts everything together with a real
`services/` · `logic/` · `ui/` separation.

## How to work through a topic

**Every topic has a notebook with the lesson**, from the first to the last. Only where
you do the exercise changes.

### Topics 01-19 — everything in the notebook

Open `topic_name.ipynb`: read the theory, run the `### Example` cell, then write your
own code in the `// Your code here` cell. Solutions are in `solutions.ipynb` — open it
only after you have actually tried.

### Topics 20-24 — notebook + project

Two things, in this order:

1. **`topic_name.ipynb`** — the lesson, same format as always. The theory lives here.
2. **`project/`** — a real Vite app where you do the exercise in the browser:
   ```bash
   cd project
   npm install     # first time only
   npm run dev
   ```
3. **`project/src/exercise/exercise.js`** — numbered **STEPs** with space to write your
   code, each with a `// Check:` line. Do one STEP at a time and look at the browser
   after each; the page reloads when you save.

These five topics each have their own `README.md` walking through it concretely, and
telling you **when the exercise is done**. If you are unsure where to start, start
there.

Note: in notebooks 20-22 the DOM snippets are non-runnable code blocks, because the
kernel has no browser (`document` does not exist there). Runnable cells are marked as
such — and in notebook 23, `fetch` really does work.

## Two kinds of exercise

They are not the same thing, and mixing them up is what makes a portfolio look empty.

| | Where it lives | What it is for |
|---|---|---|
| **Exercise** | inside this course, in `project/src/exercise/` | learn the concept now, with the HTML written and a solution beside you |
| **Mini-project** | **your own public repo**, beside this folder | rebuild from an empty folder, and leave a public record that you can |

Four topics — 20, 22, 23 and 24 — end with a `mini-project.md`: a brief telling you
what to build, what to leave out, and when it is finished. It does not tell you how;
by then you have already been taught that.

Read [PUBLISHING_GUIDE.md](PUBLISHING_GUIDE.md) once, before mini-project 1. It covers
where the folder goes (beside this course, never inside it — nested git repositories
break in confusing ways), how to commit, and what to check before you publish.

## The AI assistant

Two prompts, for two different moments. Both instruct the assistant to guide you using
the Feynman method — asking questions, correcting the concepts you get wrong, and not
handing you the solution unless you are genuinely stuck.

- **`ai-prompt.txt`** — in every topic. Use it *while* you are stuck on the exercise.
- **`review-prompt.txt`** — in the four mini-project topics. Use it *after* you think
  the mini-project is finished, to have your own code reviewed against the brief. It
  tells the assistant to name what is wrong without fixing it for you, and to judge you
  only against that brief — no suggestions about frameworks or tooling the course never
  taught you.

## License

MIT — see [LICENSE](LICENSE). Use it, fork it, teach from it.
