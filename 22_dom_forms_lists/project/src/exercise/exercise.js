/*
  EXERCISE — to-do list

  GOAL (part 1, LESSON 46): add tasks from the form, refuse an empty one,
  click a task to remove it.

  GOAL (part 2, LESSON 47): build each row from a <template> instead of by
  hand. The row then holds a <span>, which quietly breaks the way you found
  the clicked item in part 1 — STEP 8 fixes it.

  What the HTML already gives you:
      <form id="todo-form">
        <input id="todo-input" ... />
        <button type="submit">Add</button>
      </form>
      <p class="error" id="todo-error"></p>
      <template id="todo-row">
        <li class="task"><span class="label"></span></li>
      </template>
      <ul id="todo-list"></ul>

  HOW TO WORK: one STEP at a time, checking the browser after each.
  You are rebuilding the same data → render → event machine as the demo.
  Do STEPs 1-6 first and get them working; 7-8 change how a row is built,
  and there is no point changing something that does not work yet.

  DONE WHEN: you can add several tasks, an empty submit shows a message instead
  of adding anything, and clicking any task removes the right one — still correct
  after a few adds and removes, and still correct whether you click the task's
  text or the row around it.
*/

export function runExercise() {
  // (STEP 7 adds a fifth — come back for it then.)

  // write here
  // ---- STEP 1 — the elements and the data -----------------------------
  // Select the four elements you need: form, input, list (<ul>), error (<p>).
  const form = document.querySelector("#todo-form");
  const input = document.querySelector("#todo-input");
  const list = document.querySelector("#todo-list");
  const template = document.querySelector("#todo-row");
  const errElem = document.querySelector("#todo-error");
  // Also create the array that will hold the tasks — declare it here, inside
  // this function, so everything below can reach it.
  const arrayList = ["test"];

  // Check: console.log the four elements. If any is null, the selector is wrong.
  console.log(">>>CHECK ELEMENTS ...print below: ");
  console.log(form ? "🟢 Form ok!" : "🔴Form error");
  console.log(input ? "🟢 input ok!" : "🔴input error");
  console.log(list ? "🟢 list ok!" : "🔴list error");
  console.log(template ? "🟢 template ok!" : "🔴template error");
  console.log(errElem ? "🟢 errElem ok!" : "🔴errElem error");
  console.log("Array list-> ", arrayList);

  console.log(" ");

  // ---- STEP 2 — the render function -----------------------------------
  // Check: temporarily start the array with ["test"] and call render()
  //        at the end of this function. You should see it on the page.

  // write here
  // Write render(): empty the <ul>, then create one <li> per task.
  function render() {
    // 1. Select elements/create array
    list.innerHTML = "";

    // 2. render()
    arrayList.forEach((text, index) => {
      /* 
      const copy = template.content.cloneNode(true);
      const li = copy.querySelector("li");
      const label = copy.querySelector(".label");
      

      // 7. Rebuild row from <template> with cloneNode(true)
      label.textContent = text;

      // Give each <li> its textContent and its dataset.index.
      li.dataset.index = index;
      
      list.appendChild(copy);
      */
      list.appendChild(makeRow(text, index));
    });
  }
  // ---- STEP 3 — handle the submit -------------------------------------

  // write here
  // Listen for "submit" on the FORM (not "click" on the button).
  form.addEventListener("submit", (event) => {
    // First line inside: event.preventDefault() — without it the page reloads.
    event.preventDefault();
    // Then: read input.value.trim().
    const value = input.value.trim();

    // ---- STEP 4 — reject an empty task ----------------------------------

    // If the value is empty, show an error and stop.
    if (!value) {
      errElem.textContent = "Insert a valid text!";
      return;
    }

    // Otherwise: clear error, add task, clear input, render.
    errElem.textContent = "";
    arrayList.push(value);
    input.value = "";
    render();
  });

  // ---- STEP 5 — remove by delegation ----------------------------------
  //NEW LISTENER IN STEP 8
  // write here
  /* 
  list.addEventListener("click", (event) => {
    // Ignore clicks that aren't on an <li> — use the same check as the demo,
    // event.target.tagName !== "LI". (LESSON 45 also gave you closest(); use
    // Removal, by delegation: ONE listener on the <ul>.
    // the tagName check here anyway, because STEP 8 comes back to it.)
    if (event.target.tagName !== "LI") return;
    // Read the index from event.target.dataset.index (it's a string — wrap it
    // in Number()), remove that item with splice(index, 1), then render().
    const index = Number(event.target.dataset.index);
    arrayList.splice(index, 1);
    // Check: add three tasks and remove the middle one.
    render();
  });
 */
  // ---- STEP 6 — first render ------------------------------------------
  // Call render() once here, so the page is correct on first load.
  // Check: reload the page. An empty list is correct — what matters is that
  //        no error appears in the console.

  // write here
  render();

  // ======================================================================
  //  Everything above is LESSON 46 and must work before you go on.
  //  STEPs 7-8 are LESSON 47: same app, rows built from the <template>.
  // ======================================================================

  // ---- STEP 7 — build the row from the <template> ---------------------
  // Select #todo-row (the <template>) alongside your other elements.
  // Then write makeRow(todo, index) and call it from render() in place of
  // the createElement lines:
  //   - copy the template's content with template.content.cloneNode(true)
  //     — the `true` matters: without it the copy is empty
  //   - inside the copy, put `todo` into the .label <span> with textContent
  //   - put `index` into the dataset.index of the <li>, not of the <span>
  //   - return the copy, and let render() append it
  // Check: add two tasks. They still look the same, and in DevTools each row
  //        is now <li class="task"><span class="label">…</span></li>.
  //        Any "... of null" error here means the `true` is missing: you
  //        cloned an empty box, so the <li> and the <span> aren't in it.

  // write here
  function makeRow(todo, index) {
    const row = template.content.cloneNode(true);
    row.querySelector(".label").textContent = todo;
    row.querySelector("li").dataset.index = index;

    return row;
  }
  // ---- STEP 8 — find the row that was clicked -------------------------
  // Add a task and click directly on its TEXT: nothing happens any more.
  // The click now lands on the <span>, so the tagName check from STEP 5
  // no longer matches. Replace it: from event.target, walk up with
  // closest("li") (LESSON 45), and return early when it gives you null —
  // that is a click that missed every row.
  // Read dataset.index from the <li> you found, not from event.target.
  // Check: add three tasks and remove the middle one by clicking its text.
  //        Clicking a row anywhere else still removes it too — the whole <li>
  //        is the target. Only a click that misses every row, such as the
  //        list's left margin, must do nothing.

  // write here
  list.addEventListener("click", (event) => {
    const li = event.target.closest("li");
    if (!li) return;

    const index = Number(li.dataset.index);
    arrayList.splice(index, 1);
    render();
  });
}
