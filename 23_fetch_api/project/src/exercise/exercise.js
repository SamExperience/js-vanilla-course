/*
  EXERCISE — load posts

  GOAL: a button loads 10 post titles from an API, showing a loading state
  while it works and an error message if it fails.

  What the HTML already gives you:
      <button id="posts-load">Load posts</button>
      <p class="status" id="posts-status"></p>
      <ul id="posts-list"></ul>

  HOW TO WORK: one STEP at a time, checking the browser after each.
  Keep DevTools open on the Network tab (F12).

  DONE WHEN: clicking shows "Loading…", then 10 titles appear — and breaking
  the URL on purpose shows an error message instead of a blank page.
*/
import { fetchPosts } from "../services/post-service";

export function runExercise() {
  // ---- STEP 1 — create the service, in its own file -------------------
  // Create src/services/posts-service.js with an exported async function
  // fetchPosts() that:
  //   - fetches https://jsonplaceholder.typicode.com/posts
  //   - throws if response.ok is false (remember: fetch does NOT throw on 404)
  //   - returns response.json()
  // Use src/services/users-service.js as your model.
  // Check: nothing visible yet. That's expected.

  // write the new file, then come back here
  // ---- STEP 2 — import it ---------------------------------------------
  // Import fetchPosts at the TOP of this file.
  // This file must not contain a URL: that's the whole point of the split.
  // Check: still nothing visible, but the console must show no import error.

  // write the import at the top of the file
  /* fetchPosts().then((posts) =>
    posts.map((post, index) => {
      console.log(post.title);
    }),
  ); */

  // ---- STEP 3 — select the elements -----------------------------------
  // Select the button, the status <p> and the list <ul>.
  // Check: console.log the three of them. If any is null, the selector is wrong.

  // write here
  const button = document.querySelector("#posts-load");
  const uiStatus = document.querySelector("#posts-status");
  const uiPosts = document.querySelector("#posts-list");

  // ---- STEP 4 — the render function -----------------------------------
  // Write renderPosts(posts): empty the <ul>, then create one <li> per post
  // with post.title as its text.
  // Check: call it once by hand with [{ title: "test" }]. You should see it.

  // write here
  function renderPost(posts) {
    uiPosts.innerHTML = "";
    uiStatus.textContent = "Loading...";

    posts.forEach((post, index) => {
      const li = document.createElement("li");
      li.textContent = post.title;
      li.dataset.index = index;
      uiPosts.appendChild(li);
    });
  }

  //renderPost([{ title: "Test 1" }, { title: "Test 2" }]);

  // ---- STEP 5 — the click handler -------------------------------------
  // On click (the callback must be async, since you'll await inside it):
  //   a. show "Loading…" in the status and empty the list
  //   b. inside a try: await fetchPosts(), keep only the first 10 (slice),
  //      render them, and report how many in the status
  //   c. inside the catch: show `Could not load: ${error.message}` in the status
  // Check: click the button. You should see the titles.

  // write here
  button.addEventListener("click", async () => {
    try {
      const posts = await fetchPosts();
      //if (!posts) throw Error("No posts loaded");

      const firstTenPosts = posts.slice(0, 10);
      renderPost(firstTenPosts);
      uiStatus.textContent =
        firstTenPosts.length > 0 ? `${firstTenPosts.length} Posts` : "0 Post";
    } catch (error) {
      console.log("Could not load:", error.message);
      uiStatus.textContent = `Could not load: ${error.message}`;
    }
  });
  // ---- STEP 6 — test the failure --------------------------------------
  // In your service file, change the PATH to something that doesn't exist
  // ("/posts" -> "/postzzz") and click again. Keep it a valid URL: you want a
  // real 404 answer, which is what response.ok is there to catch.
  // If nothing visible changes, your error path isn't wired up.
  // Check: you should see "Could not load: Request failed with status 404",
  // not a blank list.

  // change the path, click, then put it back
}
