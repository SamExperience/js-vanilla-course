/*
  LESSON 46 — Forms and dynamic lists — LIVE DEMO

  The theory is in ../../../forms_lists.ipynb — read that first.

  This file is already written: it builds the "colours" box on the page using the
  data → render → event cycle. Keep it open next to the browser, add a colour,
  try a duplicate, click one to remove it.
*/

// 1. The data. Everything on screen is derived from this.
const colours = ["red", "green"];

export function runLesson() {
  const form = document.querySelector("#demo-form");
  const input = document.querySelector("#demo-input");
  const list = document.querySelector("#demo-list");
  const error = document.querySelector("#demo-error");

  // 2. The render function: data in, page out.
  //    It always rebuilds the whole list from scratch.
  function render() {
    list.innerHTML = "";

    colours.forEach((colour, index) => {
      const item = document.createElement("li");
      item.textContent = colour;
      item.dataset.index = index; // remember which one this is
      list.append(item);
    });
  }

  // 3. Submit changes the data, then re-renders.
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // without this, the page reloads

    const value = input.value.trim();

    // Validation: refuse empty and duplicate values.
    if (value === "") {
      error.textContent = "Type something first.";
      return;
    }

    if (colours.includes(value)) {
      error.textContent = `"${value}" is already in the list.`;
      return;
    }

    error.textContent = "";
    colours.push(value);
    input.value = ""; // clear the field
    render();
  });

  // 4. Removing, via delegation (LESSON 45).
  //    The <li> elements don't exist yet when this listener is registered —
  //    that's exactly why the listener sits on the parent.
  list.addEventListener("click", (event) => {
    if (event.target.tagName !== "LI") return;

    const index = Number(event.target.dataset.index);
    colours.splice(index, 1); // remove 1 item at that position
    render();
  });

  render(); // draw the initial state
}
