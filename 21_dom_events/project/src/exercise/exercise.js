/*
  EXERCISE — theme toggle

  GOAL: one button switches the page between light and dark, and its label
  always says what the NEXT click will do.

  What the HTML already gives you:
      <button id="theme-toggle">Switch to dark</button>

  The .dark styles already exist in style.css — you only write the behaviour.

  HOW TO WORK: one STEP at a time, checking the browser after each.
  F12 opens DevTools if something doesn't happen.

  DONE WHEN: clicking flips the colours, and the label alternates between
  "Switch to dark" and "Switch to light" — always naming the next action.
*/

export function runExercise() {
  // ---- STEP 1 — select the button -------------------------------------
  // Select the button and store it in a variable.
  // Check: console.log it. If you see null, your selector is wrong.

  // write here

  // ---- STEP 2 — listen for the click ----------------------------------
  // Listen for clicks on it.
  //   button.addEventListener("click", () => { ... });
  // Check: put a console.log inside and confirm it fires.

  // write here

  // ---- STEP 3 — toggle the theme --------------------------------------
  // Inside the listener, toggle the class "dark" on the page body.
  //   document.body.classList.toggle("dark")
  // Check: the colours flip.

  // write here

  // ---- STEP 4 — update the label --------------------------------------
  // Update the button label to describe the NEXT click.
  // toggle() hands back true when the class is now present — capture that
  // return value instead of tracking the state in your own variable.
  // Check: click twice and read the label each time.

  // write here
}
