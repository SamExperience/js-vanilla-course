/*
  Solution for LESSON 45. Only read this after you've actually tried.
  This file is not imported by main.js — it exists purely as a reference.
*/

export function runExercise() {
  // Part 1 — the theme toggle.
  const button = document.querySelector("#theme-toggle");

  button.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");

    button.textContent = isDark ? "Switch to light" : "Switch to dark";
  });

  // Part 2 — delegation: ONE listener on the list, not one per item.
  const list = document.querySelector("#fav-list");

  list.addEventListener("click", (event) => {
    // STEP 5's console.log(event.target) was scaffolding to see what the click
    // actually landed on; it has done its job and is gone here.
    // event.target is the deepest element clicked — for the "Tea" row that is
    // the <span>, so walk up to the <li> it belongs to.
    const item = event.target.closest("li");

    if (!item) return; // the click landed on the list's padding, not on a row

    item.classList.toggle("highlight");
  });

  // Part 3 — the keyboard. Escape clears every highlight.
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    document.querySelectorAll("#fav-list li").forEach((item) => {
      item.classList.remove("highlight");
    });
  });
}
