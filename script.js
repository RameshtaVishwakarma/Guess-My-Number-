'use strict';

//Definig the secret Number :
let secretNumber = Math.floor(Math.random() * 20) + 1;
//console.log(secretNumber);

//Implementing different support functions:
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

let highScore = 0;
let score = Number(document.querySelector('.score').textContent);
//console.log(score);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage(`🛑 No Number!`);
  } else if (secretNumber === guess) {
    //Display the winning message:
    displayMessage(`Your guess is correct! 🎊`);

    //Manipulating CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    //Update the score:
    score += 10;
  } else {
    if (guess > secretNumber) {
      displayMessage(`Guess is too high! 📈`);
      score -= 1;
    } else {
      displayMessage(`Guess is too low! 📉`);
      score -= 1;
    }
  }
  if (score <= 0) {
    displayMessage(`😪 You Lost the Game!`);
    score = 0;
  }

  //Updating the highscore and reflecting them in UI
  highScore = Math.max(highScore, score);
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highScore;
});

//Implementing again function
document.querySelector('.again').addEventListener('click', () => {
  displayMessage(`Start guessing ...`);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  secretNumber = Math.floor(Math.random() * 20) + 1;
  //console.log(secretNumber);
});
