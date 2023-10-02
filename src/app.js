/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = generateRandomExcuse();
};

// Excuses
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function generateRandomExcuse() {
  let whoExcuse = who[Math.floor(Math.random() * who.length)];
  let actionExcuse = action[Math.floor(Math.random() * action.length)];
  let whatExcuse = what[Math.floor(Math.random() * what.length)];
  let whenExcuse = when[Math.floor(Math.random() * when.length)];

  return `${whoExcuse} ${actionExcuse} ${whatExcuse} ${whenExcuse}`;
}
