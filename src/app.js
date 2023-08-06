/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generatedexcuse() {
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
    const randomwho = who[Math.floor(Math.random() * who.length)];
    const randomaction = action[Math.floor(Math.random() * action.length)];
    const randomwhat = what[Math.floor(Math.random() * what.length)];
    const randomwhen = when[Math.floor(Math.random() * when.length)];
    let result = `${randomwho} ${randomaction} ${randomwhat} ${randomwhen}.`;
    const excuseText = document.getElementById("excuseText");
    excuseText.innerText = result;
  }
  generatedexcuse();
};
