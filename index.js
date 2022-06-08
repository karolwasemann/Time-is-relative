// Import stylesheets
import './style.css';

let time = document.getElementById('time');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const startBtn = document.querySelector('[data-action="start"]');

let timer;
let isRunning = true;
let interval = 1000;
let multiplier = 0;

decrementBtn.addEventListener('click', () => handleMultiplier('decrement'));
incrementBtn.addEventListener('click', () => handleMultiplier('increment'));
stopBtn.addEventListener('click', () => {
  isRunning = false;
  clearInterval(timer);
});
startBtn.addEventListener('click', () => {
  if (isRunning) return;
  countTime(interval);
});

countTime(interval);

function handleMultiplier(btnAction) {
  clearInterval(timer);
  isRunning = false;
  handleMultiplierValue(btnAction);
  document.querySelector('#multi').value = multiplier;
  interval = calcInverval(multiplier);
  countTime(interval);
}

function calcInverval(multi) {
  if (multi > 0) {
    return 1000 / multi;
  }
  return 1000 * Math.abs(multi);
}

function handleMultiplierValue(btnAction) {
  switch (btnAction) {
    case 'increment':
      if (multiplier === 0) {
        multiplier += 1;
      }
      if (multiplier === 1) {
        multiplier = 2;
      } else if (multiplier === -2) {
        multiplier = 2;
      } else {
        multiplier += 1;
      }
      break;
    case 'decrement':
      if (multiplier === 0) {
        multiplier -= 1;
      }
      if (multiplier === -1) {
        multiplier = -2;
      } else if (multiplier === 2) {
        multiplier = -2;
      } else {
        multiplier -= 1;
      }
  }
}

function countTime(interval) {
  isRunning = true;
  timer = setInterval(() => {
    let spentSec = parseInt(time.value) + 1;
    time.value = spentSec;
  }, interval);
}
