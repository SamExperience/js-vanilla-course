/*
  A SERVICE talks to the outside world. It knows about URLs and JSON,
  and knows nothing about the page.

  Keeping it in its own file means the rest of the app can be read, tested
  and changed without ever thinking about HTTP. This is the src/services/
  folder you will build again in the final project, and the same split
  React projects use.
*/

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchUsers() {
  const response = await fetch(`${BASE_URL}/users`);

  // IMPORTANT: fetch does NOT throw on 404 or 500.
  // It only rejects if the network itself failed. Always check response.ok.
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  // .json() is asynchronous too — it needs its own await.
  return response.json();
}

// Same function pointed at a URL that does not exist, so you can watch
// the error path run for real.
export async function fetchFromBrokenUrl() {
  const response = await fetch(`${BASE_URL}/this-does-not-exist`);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}
