/* eslint-disable */
import "bootstrap";
import "./style.css";

document.addEventListener("DOMContentLoaded", function() {
  const excuseElement = document.querySelector("#excuse");
  excuseElement.innerHTML = generateExcuse();

  const refreshButton = document.getElementById("refresh");
  refreshButton.addEventListener("click", refreshExcuse);
});

function generateExcuse() {
  const who = ["The 🐕", "My 👵🏼", "His 🐢", "My 🐦"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my 📓", "the 🔑", "the 🚗"];
  const when = [
    "before the class",
    "right on 🕥",
    "when I finished",
    "during my lunch",
    "while I was 🙏🏼"
  ];

  const randomWho = getRandomElement(who);
  const randomAction = getRandomElement(action);
  const randomWhat = getRandomElement(what);
  const randomWhen = getRandomElement(when);

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}

function refreshExcuse() {
  location.reload();
}

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
