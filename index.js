document.getElementById(
  'footer-paragraph'
).textContent = `Created By \xA9Simphiwe ${new Date().getFullYear()}.`;

const timer = document.getElementById('time');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

startButton.addEventListener('click', startTimer);

stopButton.addEventListener('click', stopTimer);

resetButton.addEventListener('click', resetTimer);

let interval;
let timeLeft = 1500; //60seconds * 25minutes

function updateTimer() {
  let minute = Math.floor(timeLeft / 60);
  let second = timeLeft % 60;
  let formattedTime = `${minute.toString().padStart(2, '0')}:${second
    .toString()
    .padStart(2, '0')}`;

  timer.textContent = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      alert('Time is UP!! Take some rest. Good work.');
      clearInterval(interval);
      timeLeft = 1500;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}
