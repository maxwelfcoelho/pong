const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = 8;
const HEIGHT = 80;

let mouseY = 0;
let gameOver = false;

let ball = new Ball(canvas.width / 2, canvas.height / 2);
let leftPaddle = new Paddle(5, canvas.height / 2 - HEIGHT, WIDTH, HEIGHT);
let rightPaddle = new Paddle(canvas.width - 15, canvas.height / 2 - HEIGHT, WIDTH, HEIGHT);
let leftScore = new Score(0, 300, 50);
let rightScore = new Score(0, 380, 50);

function draw() {
  ball.draw(ctx);
  leftPaddle.draw(ctx);
  rightPaddle.draw(ctx);
  leftScore.draw(ctx);
  rightScore.draw(ctx);
}

function update() {
  ball.move();
  ball.bounce(canvas);
  if (mouseY >= 0 && mouseY <= canvas.height - HEIGHT) {
    leftPaddle.move(mouseY);
    rightPaddle.computer(ball, rightPaddle);
  }
  ball.collide(leftPaddle);
  ball.collide(rightPaddle);
  ball.hitWall(canvas, leftScore, rightScore);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {
  clear();
  draw();
  update();

  requestAnimationFrame(gameLoop);
}

gameLoop();

document.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(e) {
  mouseY = e.clientY;
}
