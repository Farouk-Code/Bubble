// @ts-nocheck
const counterDisplay = document.querySelector("h3");
let count = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = `${Math.random() * 200 + 100}px`;
  bubble.style.height = size;
  bubble.style.width = size;

  const topPosition = `${Math.random() * 100 + 50}%`;
  const leftPosition = `${Math.random() * 100}%`;
  bubble.style.top = topPosition;
  bubble.style.left = leftPosition;

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", `${Math.random() * 100 * plusMinus}%`);

  bubble.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 10000);
};

setInterval(bubbleMaker, 300);
