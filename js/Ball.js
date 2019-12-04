function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.width = 10;
  this.height = 10;
  this.velocity = [5, 5];
  this.audio = new Audio('../assets/sound/pong.wav'); 
}

Ball.prototype.reset = function(canvas) {
  this.x = canvas.width / 2;
  this.y = canvas.height / 2;
}

Ball.prototype.move = function(canvas) {
  this.x += this.velocity[0];
  this.y += this.velocity[1];
}

Ball.prototype.bounce = function(canvas) {
  if (this.x > canvas.width || this.x < 0) {
    this.velocity[0] = -this.velocity[0];
  }
  if (this.y > canvas.height || this.y < 0) {
    this.velocity[1] = -this.velocity[1];
  }
}

Ball.prototype.collide = function(paddle) {
  if (this.x < paddle.x + paddle.width &&
      this.x + this.width > paddle.x &&
      this.y < paddle.y + paddle.height &&
      this.y + this.height > paddle.y) {
    this.velocity[0] = -this.velocity[0];
    this.audio.play();
  }
}

Ball.prototype.hitWall = function(wall, leftScore, rightScore) {
  if (this.x === 0) {
    rightScore.increaseScore();
    this.reset(wall);
  } 
  else if (this.x === wall.width) {
    leftScore.increaseScore();
    this.reset(wall);
  }
}

Ball.prototype.draw = function(ctx) {
  ctx.fillStyle = '#FFF';
  ctx.fillRect(this.x, this.y, this.width, this.height);
}
