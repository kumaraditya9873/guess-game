'use strict';

// choose element

const check = document.querySelector('.check');
const secretnumber = Math.trunc(Math.random() * 20) + 1;

// selecting the score element
let score = 20;
// to get random number in btn 1-20 :syntax - Math.random()*20
// and to remove the decimal we wil use Math.trunc

// addEventListener

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   when there is no input

  if (!guess) {
    // here !guess means if there isnt anything the value will be false so the number 0 to make it true there is an !not sign is there
    document.querySelector('.message').textContent = 'No number !!';
    // this ones when player wins
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = 'correct Number !';
    document.querySelector('.number').textContent = secretnumber;

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    // when guess is too high
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' To high !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lost the game !';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' To low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lost the game !';
      document.querySelector('.score').textContent = 0;
    }
  }
});
