//----------------- TIMER
/*
const timedisplay = document.querySelector("#timedisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startime = 0;
let elapsetime = 0;
let currenttime = 0;
let pause = true;
let intervalID;
let hrs = 0;
let min = 0;
let sec = 0;

startBtn.addEventListener("click", () => {
  if (pause == true) {
    pause = false;
    startime = Date.now() - elapsetime;
    intervalID = setInterval(updatetime, 75);
  }
});

pauseBtn.addEventListener("click", () => {
  if (!pause) {
    pause = true;
    elapsetime = Date.now() - startime;
    clearInterval(intervalID);
  }
});

resetBtn.addEventListener("click", () => {
  pause = true;
  clearInterval(intervalID);
  startime = 0;
  elapsetime = 0;
  currenttime = 0;
  hrs = 0;
  min = 0;
  sec = 0;
  timedisplay.textContent = "00:00:00";
});

function updatetime() {
  elapsetime = Date.now() - startime;
  sec = Math.floor((elapsetime / 1000) % 60);
  min = Math.floor((elapsetime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsetime / (1000 * 60 * 60)) % 60);

  timedisplay.textContent = `${hrs}:${min}:${sec}`;

  sec = pad(sec);
  min = pad(min);
  hrs = pad(hrs);

  timedisplay.textContent = `${hrs}:${min}:${sec}`;

  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}
*/
//---------------------------- Rock Paper Scissor

/*
const playertext = document.querySelector("#playertext");
const computertext = document.querySelector("#computertext");
const resulttext = document.querySelector("#resulttext");

const choicebtn = Array.from(document.getElementsByClassName(".choicebtn"));
let player;
let computer;
let result;

choicebtn.forEach(
  (
    element //-----error here
  ) =>
    element.addEventListener("click", () => {
      player = element.textContent;
      computerTurn();
      playertext.textContent = `Player: ${player}`;
      computertext.textContent = `Computer: ${computer}`;
      resulttext.textContent = CheckWinner();
    })
);

function computerTurn() {
  const rand = Math.floor(Math.random() * 3) + 1;
  switch (rand) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissor";
      break;
  }
}

function CheckWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "Rock") {
    return player == "Paper" ? "You Win!" : "You Lose!";
  } else if (computer == "Paper") {
    return player == "Scissor" ? "You Win!" : "You Lose!";
  } else if (computer == "Scissor") {
    return player == "Rock" ? "You Win!" : "You Lose!";
  }
}
*/

//---------------------------- Tic Tac Toe ----- INCOMPLETE CODE NOT WORKING
/*
const cells = Array.from(document.getElementsByClassName("cell"));
const statustext = document.querySelector("#statustext");
const restartbtn = document.querySelector("#restartbtn");
const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = true;

initializegame();

function initializegame() {
  cells.forEach((cell) => cell.addEventListener("click", cellclicked()));
  restartbtn.addEventListener("click", restartGame());
  statustext.textContent = `${currentPlayer}'s turn`;
}

function cellclicked() {
  const cellIndex = this.getAttribute("cellIndex");
  if (options[cellIndex] != "" || !running) {
    return;
  }
  updatecell(this, cellIndex);
  checkWinner();
  running = true;
}

function updatecell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}
function changePlayer() {}
function checkWinner() {}
function restartGame() {}
*/

//---------------------------- Snake Game

const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
  { x: unitSize * 4, y: 0 },
  { x: unitSize * 3, y: 0 },
  { x: unitSize * 2, y: 0 },
  { x: unitSize, y: 0 },
  { x: 0, y: 0 },
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart() {
  running = true;
  scoreText.textContent = score;
  createFood();
  drawFood();
  nextTick();
}
function nextTick() {
  if (running) {
    setTimeout(() => {
      clearBoard();
      drawFood();
      moveSnake();
      drawSnake();
      checkGameOver();
      nextTick();
    }, 75);
  } else {
    displayGameOver();
  }
}
function clearBoard() {
  ctx.fillStyle = boardBackground;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
}
function createFood() {
  function randomFood(min, max) {
    const randNum =
      Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
    return randNum;
  }
  foodX = randomFood(0, gameWidth - unitSize);
  foodY = randomFood(0, gameWidth - unitSize);
}
function drawFood() {
  ctx.fillStyle = foodColor;
  ctx.fillRect(foodX, foodY, unitSize, unitSize);
}
function moveSnake() {
  const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };

  snake.unshift(head);
  //if food is eaten
  if (snake[0].x == foodX && snake[0].y == foodY) {
    score += 1;
    scoreText.textContent = score;
    createFood();
  } else {
    snake.pop();
  }
}
function drawSnake() {
  ctx.fillStyle = snakeColor;
  ctx.strokeStyle = snakeBorder;
  snake.forEach((snakePart) => {
    ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
    ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
  });
}
function changeDirection(event) {
  const keyPressed = event.keyCode;
  const LEFT = 37;
  const UP = 38;
  const RIGHT = 39;
  const DOWN = 40;

  const goingUp = yVelocity == -unitSize;
  const goingDown = yVelocity == unitSize;
  const goingRight = xVelocity == unitSize;
  const goingLeft = xVelocity == -unitSize;

  switch (true) {
    case keyPressed == LEFT && !goingRight:
      xVelocity = -unitSize;
      yVelocity = 0;
      break;
    case keyPressed == UP && !goingDown:
      xVelocity = 0;
      yVelocity = -unitSize;
      break;
    case keyPressed == RIGHT && !goingLeft:
      xVelocity = unitSize;
      yVelocity = 0;
      break;
    case keyPressed == DOWN && !goingUp:
      xVelocity = 0;
      yVelocity = unitSize;
      break;
  }
}
function checkGameOver() {
  switch (true) {
    case snake[0].x < 0:
      running = false;
      break;
    case snake[0].x >= gameWidth:
      running = false;
      break;
    case snake[0].y < 0:
      running = false;
      break;
    case snake[0].y >= gameHeight:
      running = false;
      break;
  }
  for (let i = 1; i < snake.length; i += 1) {
    if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
      running = false;
    }
  }
}
function displayGameOver() {
  ctx.font = "50px MV Boli";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
  running = false;
}
function resetGame() {
  score = 0;
  xVelocity = unitSize;
  yVelocity = 0;
  snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 },
  ];
  gameStart();
}
