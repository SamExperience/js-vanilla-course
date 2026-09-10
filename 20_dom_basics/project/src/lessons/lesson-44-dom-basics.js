/*
  LESSON 44 — DOM basics — LIVE DEMO

  The theory is in ../../../dom_basics.ipynb — read that first.

  This file is already written: it is the demo you see in the "Lesson demo" box
  on the page. Keep it open next to the browser and match each numbered block
  to what appears on screen.
*/

export function runLesson() {
  // 1. Find one element. The argument is a CSS selector, exactly like in CSS.
  const demo = document.querySelector("#demo");

  // 2. Write text into it.
  const title = document.createElement("p");
  title.textContent = "This paragraph was created by JavaScript.";
  demo.append(title);

  // 3. textContent vs innerHTML.
  //    textContent puts TEXT. innerHTML parses HTML tags.
  const asText = document.createElement("p");
  asText.textContent = "<em>this stays visible as tags</em>";
  demo.append(asText);

  const asHtml = document.createElement("p");
  asHtml.innerHTML = "<em>this becomes italic</em>";
  demo.append(asHtml);

  // 4. Classes: add, remove, toggle. Never rewrite className by hand.
  asHtml.classList.add("highlight");

  // 5. Inline styles, when a class would be overkill.
  title.style.opacity = "0.7";

  // 6. Build a list from data — the pattern behind every real UI.
  const fruits = ["Apple", "Banana", "Orange"];

  const list = document.createElement("ul");
  fruits.forEach((fruit) => {
    const item = document.createElement("li");
    item.textContent = fruit;
    list.append(item);
  });
  demo.append(list);

  // 7. querySelectorAll returns a list you can loop over.
  const items = demo.querySelectorAll("li");
  console.log("items on the page:", items.length);
}
