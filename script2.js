"use strict";
/* console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 15;
document.querySelector(".score").textContent = 25;

document.querySelector(".guess").value = 30;
console.log(document.querySelector(".guess").value);
 */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing.....";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  const guess = (document.querySelector(".guess").value = "");
  document.querySelector(".number").style.width = "8rem";
  document.querySelector("body").style.backgroundColor = "#595b68";
  document.querySelector(".number").style.color = "#595b68";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "NO number";
  } else if (guess == secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").classList.add(".style");
    document.querySelector(".number").style.color = "#60b347";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    document.querySelector(".message").textContent =
      guess > secretNumber ? "📈 Too high number!" : "📉 Too low number!";
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#e62929";
    document.querySelector(".number").style.color = "#e62929";
  } else {
    document.querySelector(".message").textContent = " Lost the game :)!";
    document.querySelector(".score").textContent = 0;
  }
});
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📈 Too high number!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = " Lost the game :)!";
//       document.querySelector(".score").textContent = 0;
//     }
//     document.querySelector("body").style.backgroundColor = "#e62929";
//     document.querySelector(".number").style.color = "#e62929";
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉 Too low number!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = " Lost the game :)!";
//       document.querySelector(".score").textContent = 0;
//     }
//     document.querySelector("body").style.backgroundColor = "#e62929";
//     document.querySelector(".number").style.color = "#e62929";
//   }
// });
