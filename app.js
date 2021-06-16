const board = document.querySelector("#board");
const CIRCLES_NUMBER = 192;
const colors = [
  "#336600",
  "#00ACED",
  "#FF6600",
  "#FFC300",
  "#FFC300",
  "#C70039",
  "#DAF7A6",
];

for (let i = 0; i < CIRCLES_NUMBER; i++) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("mouseover", () => setColor(circle));
  circle.addEventListener("mouseleave", () => removeColor(circle));

  board.append(circle);
}

const setColor = (element) => {
  color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (element) => {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
};

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};
