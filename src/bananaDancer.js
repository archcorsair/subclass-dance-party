var BananaDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.addClass('bananaDancer');

  if (this.isOnDanceFloor(left, top)) {
    this.$node.css('background-image', 'url(\'img/banana-dancer.gif\')');
  } else {
    this.$node.css('background-image', 'url(\'img/banana-dancer-still.png\')');
  }
};

BananaDancer.prototype = Object.create(Dancer.prototype);
BananaDancer.prototype.constructor = BananaDancer;

BananaDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

BananaDancer.prototype.startDance = function() {
  this.$node.css('background-image', 'url(\'img/banana-dancer.gif\')');
};
