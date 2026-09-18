export function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

export function reverse(word) {
  return word.split("").reverse().join("");
}

export default function slugify(text) {
  return text.replaceAll(" ", "-").toLowerCase();
}
