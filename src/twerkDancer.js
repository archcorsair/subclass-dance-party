var TwerkDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.addClass('twerkingDancer');

  if (this.isOnDanceFloor(left, top)) {
    this.$node.css('background-image', 'url(\'img/butt-shake.gif\')');
  } else {
    this.$node.css('background-image', 'url(\'img/butt-shake-still.png\')');
  }
};

TwerkDancer.prototype = Object.create(Dancer.prototype);
TwerkDancer.prototype.constructor = TwerkDancer;

TwerkDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

};

TwerkDancer.prototype.startDance = function() {
  this.$node.css('background-image', 'url(\'img/butt-shake.gif\')');
};
