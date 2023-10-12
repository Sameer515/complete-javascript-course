'use strict';
//selecting of the elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = getElementById('current--0');
const current1El = getElementById('current--1');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
// Rolling dice funcation

btnRoll.addEventListener('click', function () {
  //Generating random roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //display role
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //Check if 1 and move to another player
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; //TBOD 
  } else {
  }
});
