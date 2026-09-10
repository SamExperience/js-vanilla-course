/*
  Solution for LESSON 45. Only read this after you've actually tried.
  This file is not imported by main.js — it exists purely as a reference.
*/

export function runExercise() {
  const button = document.querySelector("#theme-toggle");

  button.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");

    button.textContent = isDark ? "Switch to light" : "Switch to dark";
  });
}
