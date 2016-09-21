var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.addClass('blinkyDancer');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.startDance = function() {
  // Doesn't work with jQuery??
  // setInterval(this.$node.toggle.bind(this), 750);

  // Workaround
  var _this = this;
  setInterval(function() { _this.$node.toggle() }, 750);

};
