var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node = $('<span class="dancer"></span>');
  this.$node.draggable();

  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.addClass = function(cls) {
  this.$node.addClass(cls);
};

Dancer.prototype.step = function() {
  var _this = this;
  setTimeout(function() {
    _this.step();
  }, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.isOnDanceFloor = function(x, y) {
  var bodyWidth = $('body').width();
  var bodyHeight = $('body').height();
  if(x > bodyWidth * 0.25 && x < bodyWidth * 0.75) {
    if (y > bodyHeight * 0.25 && y < bodyHeight * 0.75) {
      return true;
    }
  }
  return false;
};

Dancer.prototype.startDance = function() {
  throw new Error('StartDance needs to be overwritten in subclass you dummy!');
};
