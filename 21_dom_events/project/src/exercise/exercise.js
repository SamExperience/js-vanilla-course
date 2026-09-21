/*
  EXERCISE — theme toggle, then delegation, then the keyboard

  GOAL (part 1): one button switches the page between light and dark, and its
  label always says what the NEXT click will do.

  GOAL (part 2): one listener on the whole list highlights whichever item you
  click — including the row whose text sits inside a <span>.

  GOAL (part 3): pressing Escape clears every highlight.

  What the HTML already gives you:
      <button id="theme-toggle">Switch to dark</button>
      <ul id="fav-list"> with three <li>, one of them wrapping its text
      in a <span>

  The .dark and .highlight styles already exist in style.css — you only write
  the behaviour.

  HOW TO WORK: one STEP at a time, checking the browser after each.
  F12 opens DevTools if something doesn't happen.

  DONE WHEN: clicking flips the colours, the label alternates between
  "Switch to dark" and "Switch to light" — always naming the next action —
  clicking any list item highlights it, the <span> row included, and Escape
  clears every highlight.
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
  // Keep working INSIDE the listener you wrote in STEP 2 — don't add a second
  // one. Toggle the class "dark" on the page body.
  //   document.body.classList.toggle("dark")
  // Check: the colours flip.

  // write here

  // ---- STEP 4 — update the label --------------------------------------
  // Still inside that same listener: update the button label to describe the
  // NEXT click.
  // toggle() hands back true when the class is now present — capture that
  // return value instead of tracking the state in your own variable.
  // Check: click twice and read the label each time. If the colours never
  // change, you have two listeners toggling "dark" and cancelling each other.

  // write here

  // ---- STEP 5 — one listener for the whole list -----------------------
  // Select #fav-list and listen for clicks on the LIST itself, not on each
  // <li>. Inside, log event.target to see which element the click landed on.
  // Check: click "Coffee", then click the "Tea" text. The second one logs a
  // <span>, not an <li> — that is what STEP 6 has to deal with.

  // write here

  // ---- STEP 6 — find the item that was clicked ------------------------
  // From event.target, walk up to the <li> with closest("li"), then toggle
  // the class "highlight" on it.
  // closest() returns null when the click missed every <li> — landing on the
  // gutter beside the rows counts as a miss — so return early in that case.
  // Check: all three rows highlight, the <span> row included.

  // write here

  // ---- STEP 7 — clear them with the keyboard --------------------------
  // Listen for "keydown" on document. When event.key is "Escape", remove the
  // class "highlight" from every <li> in the list.
  // querySelectorAll gives you all of them at once (LESSON 44).
  // Remember event.key is case-sensitive: it is "Escape", not "escape".
  // Check: highlight two rows, press Esc, both clear.

  // write here
}
