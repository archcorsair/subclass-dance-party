var TwerkDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.addClass('twerkingDancer');

  if (this.isOnDanceFloor(left, top)) {
    this.startDance();
  } else {
    this.stopDance();
  }
};

TwerkDancer.prototype = Object.create(Dancer.prototype);
TwerkDancer.prototype.constructor = TwerkDancer;

TwerkDancer.prototype.startDance = function() {
  this.$node.css('background-image', 'url(\'img/butt-shake.gif\')');
};

TwerkDancer.prototype.stopDance = function() {
  this.$node.css('background-image', 'url(\'img/butt-shake-still.png\')');
};
