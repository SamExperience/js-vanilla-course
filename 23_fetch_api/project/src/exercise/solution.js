/*
  Solution for LESSON 48. Only read this after you've actually tried.
  This file is not imported by main.js — it exists purely as a reference.

  Note where fetchPosts() is NOT: this file holds no URL. It lives in
  src/services/posts-solution-service.js, exactly as STEP 1 asks. Yours belongs
  in src/services/posts-service.js.
*/

import { fetchPosts } from "../services/posts-solution-service.js";

export function runExercise() {
  const button = document.querySelector("#posts-load");
  const status = document.querySelector("#posts-status");
  const list = document.querySelector("#posts-list");

  function renderPosts(posts) {
    list.innerHTML = "";

    posts.forEach((post) => {
      const item = document.createElement("li");
      item.textContent = post.title;
      list.append(item);
    });
  }

  button.addEventListener("click", async () => {
    status.textContent = "Loading…";
    list.innerHTML = "";

    try {
      const posts = await fetchPosts();
      const firstTen = posts.slice(0, 10);

      status.textContent = `${firstTen.length} posts loaded.`;
      renderPosts(firstTen);
    } catch (error) {
      status.textContent = `Could not load: ${error.message}`;
    }
  });
}
