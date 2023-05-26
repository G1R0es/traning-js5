"use strict";

let month = prompt("Введите месяц");
let season = [" зима", " весна", " лето", " осень"];

if (month >= 1 && month <= 12) {
  alert("времена года" + season[Math.floor((month % 12) / 3)]);
} else {
  alert("неправильный месяц");
}
