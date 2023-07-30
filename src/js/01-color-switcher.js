const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function startChangingColor() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startButtonDisabled(true);
}

function stopChangingColor() {
  clearInterval(intervalId);

  startButtonDisabled(false);
}

function startButtonDisabled(boolean) {
  if (boolean) {
    startButton.disabled = true;
    stopButton.disabled = false;
    return;
  }
  startButton.disabled = false;
  stopButton.disabled = true;
}

startButton.addEventListener('click', startChangingColor);
stopButton.addEventListener('click', stopChangingColor);
