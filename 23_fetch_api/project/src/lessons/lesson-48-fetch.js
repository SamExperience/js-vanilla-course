/*
  LESSON 48 — Fetch & APIs — LIVE DEMO

  The theory is in ../../../fetch_api.ipynb — read that first.

  This file is already written. The thing to notice: it never mentions a URL.
  The service does that. This one only deals with the page — and that separation
  is the point of the lesson.
*/

import { fetchUsers, fetchFromBrokenUrl } from "../services/users-service.js";

export function runLesson() {
  const loadButton = document.querySelector("#demo-load");
  const failButton = document.querySelector("#demo-fail");
  const status = document.querySelector("#demo-status");
  const list = document.querySelector("#demo-list");

  function renderUsers(users) {
    list.innerHTML = "";

    users.forEach((user) => {
      const item = document.createElement("li");
      item.textContent = `${user.name} — ${user.email}`;
      list.append(item);
    });
  }

  async function load(serviceFunction) {
    // 1. LOADING
    status.textContent = "Loading…";
    list.innerHTML = "";

    try {
      const users = await serviceFunction();

      // 2. SUCCESS
      status.textContent = `${users.length} users loaded.`;
      renderUsers(users);
    } catch (error) {
      // 3. ERROR — say something useful, don't fail silently
      status.textContent = `Could not load: ${error.message}`;
    }
  }

  loadButton.addEventListener("click", () => load(fetchUsers));
  failButton.addEventListener("click", () => load(fetchFromBrokenUrl));
}
