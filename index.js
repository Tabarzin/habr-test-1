const timeInput = document.getElementById("time-input");
const addTimerButton = document.getElementById("add-timer");
const timersList = document.getElementById("timers");

//  add a new timer
addTimerButton.addEventListener("click", () => {
  const duration = parseInt(timeInput.value, 10);

  if (isNaN(duration) || duration <= 0) {
    alert("Введите корректное время (положительное число)");
    return;
  }

  createTimer(duration);
  timeInput.value = "";
});

function createTimer(duration) {
  const timerItem = document.createElement("li");

  const timerText = document.createElement("span");
  timerText.className = "timer-text";
  timerText.textContent = `${duration} секунд`;

  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  removeButton.textContent = "Удалить";

  timerItem.appendChild(timerText);
  timerItem.appendChild(removeButton);
  timersList.appendChild(timerItem);

  let remainingTime = duration;
  const intervalId = setInterval(() => {
    remainingTime -= 1;
    timerText.textContent = `${remainingTime} секунд`;

    if (remainingTime <= 0) {
      clearInterval(intervalId);
      timersList.removeChild(timerItem);
    }
  }, 1000);

  removeButton.addEventListener("click", () => {
    clearInterval(intervalId);
    timersList.removeChild(timerItem);
  });
}
