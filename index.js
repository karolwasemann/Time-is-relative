// Import stylesheets
import './style.css';

let time = document.getElementById('time');
const multiplierButtons = document.querySelectorAll('[data-action');

function setTime() {
  let spentSec = parseInt(time.value) + 1;
  time.value = spentSec;
}

function setTimer() {
  let speed = 1000;
  speed = multiplier(speed);
  console.log(speed);
  return setInterval(setTime, speed);
}

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

  speed = 2000;
  return speed;
}

setTimer();
