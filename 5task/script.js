"use strict";

function calc(n) {
  if (n > 1) {
    return n + calc(n - 1);
  }
  return n;
}

console.log(calc(5));
