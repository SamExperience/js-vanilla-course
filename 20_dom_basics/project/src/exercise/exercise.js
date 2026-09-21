/*
  EXERCISE — click counter

  GOAL: the "+1" button counts up, and at 10 the number turns red.

  What the HTML already gives you:
      <h3 id="count">0</h3>
      <button id="increment">+1</button>

  HOW TO WORK: do one STEP at a time and look at the browser after each one.
  The page reloads by itself when you save. If nothing happens, open DevTools
  with F12 and read the error.

  DONE WHEN: clicking counts 1, 2, 3… and the number is red from 10 onwards.
*/

export function runExercise() {
  // ---- STEP 1 — select the elements -----------------------------------
  // Select the two elements: the <h3 id="count"> and the <button id="increment">.
  // Store each one in a variable.
  // Check: console.log them. If you see null, your selector is wrong.

  // write here
  const count = document.querySelector("#count");
  if (!count) {
    console.log(">>>Selector is null or wrong!");
  } else {
    console.log("count>>>: ", count);
    console.log("count inside >>>: ", count.textContent);
  }

  const increment = document.querySelector("#increment");
  if (!increment) {
    console.log(">>>Selector is null or wrong!");
  } else {
    console.log("increment>>>: ", increment);
    console.log("increment inside >>>: ", increment.textContent);
  }

  // ---- STEP 2 — the count variable ------------------------------------
  // Create a variable holding the current count, starting at 0.
  // Careful: it must survive between two clicks, so think about WHERE it goes
  // and whether const is the right choice.
  // Check: nothing visible yet. That's expected.

  // write here
  let counter = 0;
  console.log("Counter>>>: ", counter);
  counter = parseInt(count.textContent);
  console.log("Counter=countContent>>>: ", counter);

  // ---- STEP 3 — react to the click ------------------------------------
  // Listen for clicks on the button. On each click: add 1 to the count and
  // show the new value inside the <h3>.
  //   button.addEventListener("click", () => { ... });
  // Check: the number goes up in the browser.

  // write here

  increment.addEventListener("click", () => {
    counter++;
    console.log("Counter>>>", counter);
    count.textContent = counter;
    console.log("Count>>>", count);

    // ---- STEP 4 — turn it red at 10 -------------------------------------
    // When the count reaches 10, turn the <h3> text red.
    //   element.style.color = "red";
    // Check: click ten times.

    // write here
    if (counter === 10) {
      count.style.color = "red";
      console.log(">>>RED);");
    }
  });
}
