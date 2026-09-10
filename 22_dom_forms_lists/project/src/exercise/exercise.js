/*
  EXERCISE — to-do list

  GOAL: add tasks from the form, refuse an empty one, click a task to remove it.

  What the HTML already gives you:
      <form id="todo-form">
        <input id="todo-input" ... />
        <button type="submit">Add</button>
      </form>
      <p class="error" id="todo-error"></p>
      <ul id="todo-list"></ul>

  HOW TO WORK: one STEP at a time, checking the browser after each.
  You are rebuilding the same data → render → event machine as the demo.

  DONE WHEN: you can add several tasks, an empty submit shows a message instead
  of adding anything, and clicking any task removes the right one — still correct
  after a few adds and removes.
*/

export function runExercise() {
  // ---- STEP 1 — the elements and the data -----------------------------
  // Select the four elements you need: form, input, list (<ul>), error (<p>).
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
  // Ignore clicks that aren't on an <li>, read the index from
  // event.target.dataset.index (it's a string — wrap it in Number()),
  // remove that item with splice(index, 1), then render() again.
  // Check: add three tasks and remove the middle one.

  // write here

  // ---- STEP 6 — first render ------------------------------------------
  // Call render() once here, so the page is correct on first load.
  // Check: reload the page. An empty list is correct — what matters is that
  //        no error appears in the console.

  // write here
}
