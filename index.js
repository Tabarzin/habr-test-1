const addTimerButton = document.getElementById("btn");
const timersContainer = document.getElementById("timers-container");

// Create and add a new timer
addTimerButton.addEventListener("click", () => {
  const timerWrapper = document.createElement("div");
  timerWrapper.style.marginBottom = "20px";

  // Create input
  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Enter time in seconds";
  input.style.marginRight = "10px";

  const startButton = document.createElement("button");
  startButton.textContent = "Start Timer";

  const timerDisplay = document.createElement("div");
  timerDisplay.textContent = "Timer will appear here...";
  timerDisplay.style.marginTop = "10px";

  // Append elements to the timer wrapper
  timerWrapper.appendChild(input);
  timerWrapper.appendChild(startButton);
  timerWrapper.appendChild(timerDisplay);

  timersContainer.appendChild(timerWrapper);

  startButton.addEventListener("click", () => {
    let timeLeft = parseInt(input.value, 10);
    if (isNaN(timeLeft) || timeLeft <= 0) {
      timerDisplay.textContent = "Please enter a valid number!";
      return;
    }

    timerDisplay.textContent = `${timeLeft} seconds remaining`;

    if (timerWrapper.timerInterval) {
      clearInterval(timerWrapper.timerInterval);
    }

    timerWrapper.timerInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft > 0) {
        timerDisplay.textContent = `${timeLeft} seconds remaining`;
      } else {
        timerDisplay.textContent = "Time's up!";
        clearInterval(timerWrapper.timerInterval);
        input.placeholder = "";
      }
    }, 1000);
  });
});
