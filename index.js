// Import stylesheets
import './style.css';

let time = document.getElementById('time');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const startBtn = document.querySelector('[data-action="start"]');

let isRunning = true;
let speed = 1000;

decrementBtn.addEventListener('click', () => multiplier(false, speed));
incrementBtn.addEventListener('click', () => multiplier(true, speed));

stopBtn.addEventListener('click', () => (isRunning = false));
startBtn.addEventListener('click', () => (isRunning = true));
// speed = multiplier(speed);

setInterval(() => {
  if (isRunning) {
    let spentSec = parseInt(time.value) + 1;
    time.value = spentSec;
  }
}, speed);

function multiplier(isIncerement, speed) {
  const multiField = document.querySelector('#multi');
  let value = parseInt(multiField.value);

  if (isIncerement) {
    value += 1;
  } else {
    value -= 1;
  }
  if (value === -1) {
    value = 2;
  }
  if (value === 1) {
    value = -2;
  }

  speed = 1000;
  multiField.value = value;
  return speed;
}
