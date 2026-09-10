/*
  Solution for LESSON 44. Only read this after you've actually tried.
  This file is not imported by main.js — it exists purely as a reference.
*/

export function runExercise() {
  const countElement = document.querySelector("#count");
  const button = document.querySelector("#increment");

  let count = 0;

  button.addEventListener("click", () => {
    count = count + 1;
    countElement.textContent = count;

    if (count >= 10) {
      countElement.style.color = "red";
    }
  });
}
