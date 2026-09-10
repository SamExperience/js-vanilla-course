// A module: a file that exports things other files can import.

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// A module can have exactly ONE default export.
export default function describe() {
  return "math-utils: add, multiply";
}
