/*
  Reference service for the LESSON 48 exercise. Only read this after you've tried.
  Your own version belongs in posts-service.js, next to this file.

  A SERVICE knows URLs and JSON, and knows nothing about the page.
*/

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchPosts() {
  const response = await fetch(`${BASE_URL}/posts`);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}
