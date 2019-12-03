function Score(value, x, y) {
  this.value = value;
  this.x = x;
  this.y = y;
}

Score.prototype.increaseScore = function() {
  this.value++;
}

Score.prototype.draw = function(ctx) {
  ctx.font = "40px Arial";  
  ctx.fillText(this.value, this.x, this.y)
}