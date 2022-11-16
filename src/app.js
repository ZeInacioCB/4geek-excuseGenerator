/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here - variabels with excuses elements
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car", "my bike"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excuseP = document.getElementById("excuse");

  function excuseElements(excusesArr) {
    let randomIndex = Math.floor(Math.random() * excusesArr.length);
    return excusesArr[randomIndex];
  }

  let newExcuse =
    excuseElements(who) +
    " " +
    excuseElements(action) +
    " " +
    excuseElements(what) +
    " " +
    excuseElements(when);

  excuseP.innerHTML = newExcuse;
};
