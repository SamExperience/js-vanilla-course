# Publishing guide

Four times in this course you stop and build something in **your own public
repository**: after topics 20, 22, 23 and 24. Each one has a brief — `mini-project.md`
in that topic's folder — telling you *what* to build. This guide covers everything
those four briefs have in common: where the folder goes, how to commit, and what
"finished" means.

Read it once before mini-project 1. After that, come back only for the checklists.

## Why bother

The exercises inside this course come with scaffolding: the HTML is already written,
the file is waiting for you, and a solution sits next to it. That is right for learning
a concept, and it is also why nobody can tell from the outside whether you understood
it.

A mini-project starts from an empty folder. Nothing is set up. That is the whole point:
it is where you find out what you actually know, and it leaves a public record — a
short, honest commit history showing you built it step by step.

## 1. Where the folder goes

**Beside the course, never inside it.** The course is a git repository. A repository
inside another repository breaks in confusing ways: your files silently fail to commit,
or they end up in the wrong project.

```
your-projects-folder/
├── js-vanilla-course/     this course — you read here, you never write here
├── js-fizzbuzz/           mini-project 1
├── js-list-filter/        mini-project 2
├── js-market-dashboard/   mini-project 3
└── js-user-directory/     mini-project 4
```

```bash
cd your-projects-folder          # the folder CONTAINING the course, not the course
mkdir js-fizzbuzz
cd js-fizzbuzz
```

Now check you are in the right place **before writing any code**:

```bash
git rev-parse --show-toplevel
```

- `fatal: not a git repository` — correct. You have not run `git init` yet.
- A path ending in `js-fizzbuzz` — correct, after `git init`.
- A path ending in `js-vanilla-course` — **wrong**. You are inside the course. Move the
  folder out and start again.

## 2. Create the repository

On github.com: **New repository**. Use the name the brief gives you, set it to
**Public**, and add nothing — no README, no `.gitignore`, no license. Vite generates a
correct `.gitignore` for you, and starting empty avoids a conflict on your first push.

Then, in your project folder:

```bash
npm create vite@latest . -- --template vanilla
npm install
npm run dev
git init
git remote add origin https://github.com/<your-username>/<repo-name>.git
```

The `--template vanilla` part matters: it scaffolds the project **without asking you
anything**. Run `npm create vite@latest` on its own and it turns interactive instead,
asking for a project name, a framework, and then a variant — and there you would have
to pick **Vanilla**, then **JavaScript**, not TypeScript. (A further question about
Oxlint or ESLint exists, but only for the React templates, so you will never see it
here.) The flag answers all of that for you, which is why every brief uses it.

The scaffold is a working demo page, not an empty project. Before you write anything,
delete what you will not use: `src/counter.js`, the images in `src/assets/`,
`public/icons.svg`, and the boilerplate rules in `src/style.css`. Leave `index.html`
alone — its `<div id="app">` and the `<script>` line are what you build on. Shipping a
repo that still shows the Vite logo tells a reader you stopped before the first step.

## 3. The commit loop

Run this sequence for every commit. Learn it once here and it stops being a decision.

```bash
git status          # what changed? Anything unexpected in the list?
git diff            # read every changed line before staging it
git add .           # or: git add <file>, to be selective
git diff --staged   # last look at what is actually about to be committed
git commit -m "feat: ..."
git push            # first push on a new repo: git push -u origin main
```

`git status` and `git diff` are not ceremony. They are where you catch a forgotten
`console.log`, a file you did not mean to touch, or `node_modules` showing up because
`.gitignore` is wrong. If you ever see `node_modules/` or `dist/` in `git status`, stop
and fix `.gitignore` before committing.

**When to commit:** when one coherent change is finished and you have checked it works.
Not once per STEP, not "because an hour has passed". Each commit on its own should
leave the project in a working state.

## 4. Commit messages

```text
feat:      new behaviour the user can see
fix:       corrects something that behaved wrongly
refactor:  code reorganised, behaviour unchanged
style:     appearance only (CSS, formatting), no logic
docs:      documentation only (README, comments)
chore:     setup, dependencies, configuration
```

Imperative mood, lowercase after the colon, no full stop:

```text
GOOD                                        BAD
feat: render fizzbuzz results in the DOM    update
fix: reject an empty task on submit         fix
refactor: move fetch into a service file    changes
docs: add README with setup steps           final-final
```

"update" tells you nothing in six months, and tells a reader of your profile even less.

## 5. Your project's README

Write it for someone who has never seen the project. Required sections:

~~~markdown
# Project Name

One line: what this does.

## Overview

2-4 lines: what it does and what it was for. Say plainly that it is a learning
project — that is a strength, not something to hide.

## Features

- what a user can actually do
- one line each

## Technologies

- JavaScript (vanilla), Vite
- any external API, with a link

## Getting started

```bash
npm install
npm run dev
```

## What I learned

2-4 lines, in your own words. The most-read section for anyone judging your work.

## Screenshots

(at least one)
~~~

One rule: **the README describes the code that exists**, not what you plan to add. If
something is unfinished, put it under a short "Future improvements" heading or leave it
out.

## 6. Before you call it finished

```text
[ ] npm run build completes with no errors
[ ] browser console is clean — no errors, no warnings
[ ] every item in the brief's "Done when" list passes
[ ] .gitignore covers node_modules and dist
[ ] README written, with a screenshot
[ ] Description and 4-6 Topics set on GitHub (⚙️ next to "About")
[ ] git status is clean, everything pushed
```

Deployment is not part of this course. These are learning repositories: readable code,
an honest history and a clear README are what matter.
