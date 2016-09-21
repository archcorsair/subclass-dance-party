var BananaDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.addClass('bananaDancer');

  if (this.isOnDanceFloor(left, top)) {
    this.startDance();
  } else {
    this.stopDance();
  }
};

BananaDancer.prototype = Object.create(Dancer.prototype);
BananaDancer.prototype.constructor = BananaDancer;

BananaDancer.prototype.startDance = function() {
  this.$node.css('background-image', 'url(\'img/banana-dancer.gif\')');
};

BananaDancer.prototype.stopDance = function() {
  this.$node.css('background-image', 'url(\'img/banana-dancer-still.png\')');
};
