// Reference solution for LESSON 40.
// Your own version belongs in ../lib/string-utils.js — write it there first.

export function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

export function reverse(word) {
  return word.split("").reverse().join("");
}

export default function slugify(text) {
  return text.toLowerCase().replaceAll(" ", "-");
}
