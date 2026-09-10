// Named exports can also be declared first and exported at the bottom.

const GREETING = "Hello";

function greet(name) {
  return `${GREETING}, ${name}!`;
}

function shout(name) {
  return greet(name).toUpperCase();
}

// `helper` is NOT exported: it stays private to this module.
function helper() {
  return "you cannot import me";
}

export { greet, shout, GREETING };
