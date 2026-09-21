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
  // ---- STEP 1 — the elements and the data -----------------------------
  // Select the four elements you need: form, input, list (<ul>), error (<p>).
  // (STEP 7 adds a fifth — come back for it then.)
  // Also create the array that will hold the tasks — declare it here, inside
  // this function, so everything below can reach it.
  // Check: console.log the four elements. If any is null, the selector is wrong.

  // write here

  // ---- STEP 2 — the render function -----------------------------------
  // Write render(): empty the <ul>, then create one <li> per task.
  // Give each <li> its textContent and its dataset.index.
  // Check: temporarily start the array with ["test"] and call render()
  //        at the end of this function. You should see it on the page.

  // write here

  // ---- STEP 3 — handle the submit -------------------------------------
  // Listen for "submit" on the FORM (not "click" on the button).
  // First line inside: event.preventDefault() — without it the page reloads.
  // Then: read input.value.trim().
  // Check: console.log the value and confirm the page does NOT reload.

  // write here

  // ---- STEP 4 — reject an empty task ----------------------------------
  // Still inside the submit listener:
  //   - if the value is empty: write a message into the error <p> and stop (return)
  //   - otherwise: clear the error, push the task, empty the input, call render()
  // Check: add two tasks, then try submitting an empty one.

  // write here

  // ---- STEP 5 — remove by delegation ----------------------------------
  // Removal, by delegation: ONE listener on the <ul>.
  // Ignore clicks that aren't on an <li> — use the same check as the demo,
  // event.target.tagName !== "LI". (LESSON 45 also gave you closest(); use
  // the tagName check here anyway, because STEP 8 comes back to it.)
  // Read the index from event.target.dataset.index (it's a string — wrap it
  // in Number()), remove that item with splice(index, 1), then render().
  // Check: add three tasks and remove the middle one.

  // write here

  // ---- STEP 6 — first render ------------------------------------------
  // Call render() once here, so the page is correct on first load.
  // Check: reload the page. An empty list is correct — what matters is that
  //        no error appears in the console.

  // write here

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
}
