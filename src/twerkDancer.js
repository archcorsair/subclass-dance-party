var TwerkDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.addClass('twerkingDancer');
};

TwerkDancer.prototype = Object.create(Dancer.prototype);
TwerkDancer.prototype.constructor = TwerkDancer;

TwerkDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

};
