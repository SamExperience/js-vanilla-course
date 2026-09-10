/*
  LESSON 45 — DOM events — LIVE DEMO

  The theory is in ../../../dom_events.ipynb — read that first.

  This file is already written. Keep it open next to the browser, click around
  the page with the console open (F12), and match each numbered block to what
  happens on screen.
*/

export function runLesson() {
  // 1. The simplest listener.
  const button = document.querySelector("#demo-click");

  button.addEventListener("click", () => {
    console.log("button clicked");
  });

  // 2. The event object. Log it once and expand it in the console:
  //    there is much more in there than you need today.
  button.addEventListener("click", (event) => {
    console.log("event type:", event.type);
    console.log("came from:", event.target);
  });
  // Note: two listeners on the same element both run. They don't replace
  // each other.

  // 3. The "input" event fires on every keystroke.
  const input = document.querySelector("#demo-input");
  const echo = document.querySelector("#demo-echo");

  input.addEventListener("input", (event) => {
    echo.textContent = event.target.value || "—";
  });

  // 4. EVENT DELEGATION.
  //    Instead of one listener per <li>, put ONE on the parent and ask
  //    the event which child it came from. This keeps working even for
  //    items added later — which is exactly what you need in LESSON 46.
  const list = document.querySelector("#demo-list");
  const targetLabel = document.querySelector("#demo-target");

  list.addEventListener("click", (event) => {
    if (event.target.tagName !== "LI") return;

    targetLabel.textContent = event.target.textContent;
    event.target.classList.toggle("highlight");
  });

  // 5. preventDefault: the link stays put instead of navigating away.
  const link = document.querySelector("#demo-link");

  link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("navigation blocked by preventDefault()");
  });
}
