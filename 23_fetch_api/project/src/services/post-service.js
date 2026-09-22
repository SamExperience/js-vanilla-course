const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export async function fetchPosts() {
  try {
    const response = await fetch(`${BASE_URL}`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.json();
  } catch (err) {
    throw err;
  }
}
