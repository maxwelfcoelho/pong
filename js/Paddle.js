function Paddle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Paddle.prototype.move = function(mousePosition) {
  this.y = mousePosition;
}

Paddle.prototype.draw = function(ctx) {
  ctx.fillRect(this.x, this.y, this.width, this.height);
}