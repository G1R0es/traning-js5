"use strict";

function allNumbers(num) {
  let obj = {
    evenNums: [],
    oddNums: [],
  };
  for (let i = 1; i <= num; i++) {
    obj[i % 2 ? "oddNums" : "evenNums"].push(i);
  }
  return obj;
}
console.log(allNumbers(10));
