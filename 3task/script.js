"use strict";
let str = prompt("слово");
let letter = prompt("Символ");

function count(str, letter) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) ++total;
  }
  return total;
}
console.log(
  `Строка ${str} содержит ${count(str, letter)} раз символ ${letter}`
);
