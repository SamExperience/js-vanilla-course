/*
  Solution for LESSON 46-47. Only read this after you've actually tried.
  This file is not imported by main.js — it exists purely as a reference.

  This is the finished state, after STEP 8. Where STEPs 7-8 replaced something,
  the LESSON 46 version is kept beside it as a comment, so you can see what
  changed and why.
*/

export function runExercise() {
  const todos = [];

  const form = document.querySelector("#todo-form");
  const input = document.querySelector("#todo-input");
  const list = document.querySelector("#todo-list");
  const error = document.querySelector("#todo-error");
  const template = document.querySelector("#todo-row"); // STEP 7

  // STEP 7 — one row, cloned from the <template> instead of built by hand.
  function makeRow(todo, index) {
    const row = template.content.cloneNode(true); // true: copy the children too
    const item = row.querySelector("li");

    row.querySelector(".label").textContent = todo;
    item.dataset.index = index; // on the <li>, not on the <span>

    return row;
  }

  function render() {
    list.innerHTML = ""; // clear, then rebuild

    todos.forEach((todo, index) => {
      list.append(makeRow(todo, index));

      // STEPs 2-6 built the row here instead:
      //   const item = document.createElement("li");
      //   item.textContent = todo;
      //   item.dataset.index = index;
      //   list.append(item);
    });
  }

  // STEPs 3-4 — submit changes the data, then re-renders.
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // without this, the page reloads

    const value = input.value.trim();

    if (value === "") {
      error.textContent = "Type something first.";
      return;
    }

    error.textContent = "";
    todos.push(value);
    input.value = ""; // clear the field
    render();
  });

  // STEPs 5 and 8 — removal, by delegation: ONE listener on the <ul>.
  list.addEventListener("click", (event) => {
    // STEP 8: the row now wraps its text in a <span>, so the click often
    // lands on the span and never on the <li>. closest() walks up to find it.
    const item = event.target.closest("li");
    if (!item) return; // the click missed every row

    // STEP 5 used the check below, which stopped matching once STEP 7
    // put a <span> inside each row:
    //   if (event.target.tagName !== "LI") return;
    //   const index = Number(event.target.dataset.index);

    const index = Number(item.dataset.index);
    todos.splice(index, 1); // remove 1 item at that position
    render();
  });

  render(); // STEP 6 — draw the initial state
}
