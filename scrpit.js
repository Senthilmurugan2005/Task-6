let timer;
let timeLeft = 0;
let isRunning = false;

function startTimer() {
  const input = document.getElementById("inputMinutes");

  if (!isRunning) {
    if (input.value === "") {
      alert("Please enter time in minutes.");
      return;
    }

    timeLeft = parseInt(input.value) * 60;
    isRunning = true;
    input.disabled = true;

    timer = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("display").textContent = "00:00";
        alert("Time's up!");
        isRunning = false;
        input.disabled = false;
        return;
      }

      updateDisplay(timeLeft);
      timeLeft--;
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 0;
  isRunning = false;
  document.getElementById("inputMinutes").value = "";
  document.getElementById("display").textContent = "00:00";
  document.getElementById("inputMinutes").disabled = false;
}

function updateDisplay(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.getElementById("display").textContent = `${mins}:${secs}`;
}
