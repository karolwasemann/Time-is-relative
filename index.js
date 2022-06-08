// Import stylesheets
import './style.css';

let time = document.getElementById('time');
const multiplierButtons = document.querySelectorAll('[data-action');
const stopBtn = document.querySelector('[data-play="stop"]');
const startBtn = document.querySelector('[data-play="start"]');

let isRunning = true;
let speed = 1000;

stopBtn.addEventListener('click', () => (isRunning = false));
startBtn.addEventListener('click', () => (isRunning = true));
speed = multiplier(speed);

setInterval(() => {
  if (isRunning) {
    let spentSec = parseInt(time.value) + 1;
    time.value = spentSec;
  }
}, speed);

function multiplier(speed) {
  const multiField = document.querySelector('#multi');
  multiplierButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (e.target.getAttribute('data-action') === 'decrement') {
        multiField.value = parseInt(multi.value) - 1;
      } else {
        multiField.value = parseInt(multi.value) + 1;
      }
    });
  });

  speed = 1000;
  return speed;
}
