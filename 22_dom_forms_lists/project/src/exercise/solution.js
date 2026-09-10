/*
  Solution for LESSON 46. Only read this after you've actually tried.
  This file is not imported by main.js — it exists purely as a reference.
*/

export function runExercise() {
  const todos = [];

  const form = document.querySelector("#todo-form");
  const input = document.querySelector("#todo-input");
  const list = document.querySelector("#todo-list");
  const error = document.querySelector("#todo-error");

  function render() {
    list.innerHTML = "";

    todos.forEach((todo, index) => {
      const item = document.createElement("li");
      item.textContent = todo;
      item.dataset.index = index;
      list.append(item);
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = input.value.trim();

    if (value === "") {
      error.textContent = "Type something first.";
      return;
    }

    error.textContent = "";
    todos.push(value);
    input.value = "";
    render();
  });

  list.addEventListener("click", (event) => {
    if (event.target.tagName !== "LI") return;

    const index = Number(event.target.dataset.index);
    todos.splice(index, 1);
    render();
  });

  render();
}
