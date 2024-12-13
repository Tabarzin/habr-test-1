const addTimerButton = document.getElementById("btn");
const timersContainer = document.getElementById("timers-container");

// Create and add a new timer
addTimerButton.addEventListener("click", () => {
  const timerWrapper = document.createElement("div");
  timerWrapper.style.marginBottom = "20px";

  // Create input
  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Введите время в секундах";
  input.style.marginRight = "10px";

  const startButton = document.createElement("button");
  startButton.textContent = "Старт";

  const timerDisplay = document.createElement("div");
  timerDisplay.textContent = "Здесь будет таймер...";
  timerDisplay.style.marginTop = "10px";

  timerWrapper.appendChild(input);
  timerWrapper.appendChild(startButton);
  timersContainer.appendChild(timerWrapper);
  timerWrapper.appendChild(timerDisplay);

  startButton.addEventListener("click", () => {
    let timeLeft = parseInt(input.value, 10);
    if (isNaN(timeLeft) || timeLeft <= 0) {
      timerDisplay.textContent = "Введите число!";
      return;
    }

    timerDisplay.textContent = `Осталось: ${timeLeft}`;

    if (timerWrapper.timerInterval) {
      clearInterval(timerWrapper.timerInterval);
    }

    timerWrapper.timerInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft > 0) {
        timerDisplay.textContent = `Осталось: ${timeLeft}`;
      } else {
        timerDisplay.textContent = "Время вышло!";
        clearInterval(timerWrapper.timerInterval);
        input.value = "";
      }
    }, 1000);
  });
});
