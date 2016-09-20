$(document).ready(function() {

  var isOnDanceFloor = function(x, y) {
    var bodyWidth = $('body').width();
    var bodyHeight = $('body').height();
    if(x > bodyWidth * 0.25 && x < bodyWidth * 0.75) {
      if (y > bodyHeight * 0.25 && y < bodyHeight * 0.75) {
        return true;
      }
    }

    return false;
  }

  var normalizeNumber = function(number, limit) {
    if (number < 200) {
      number += 200;
    }
    if (number > limit - 200) {
      number -= 200;
    }
    return number;
  }

  window.dancers = [];
  var numberOfDancers = 0;
  $('#draggable').draggable();

  var randomTime = function() {
    return Math.floor(Math.random() * 10) + 2;
  };
  // Generate Dance Floor Tiles. 56 = number of tiles
  for (var i = 0; i < 56; i++) {
    var color = Math.floor(Math.random() * 16777215).toString(16);
    var $newTile = $('<div class="danceFloorTile"></div>');
    //$newTile.css('background-color', '#' + color);
    $newTile.css('animation', `danceFloorTileAnimation ${randomTime() + 1}s infinite`);
    $('#droppable').append($newTile);
  }

  var stringContains = function(str, key) {
    str = str || '';
    return str.indexOf(key) > -1;
  };

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var height = $('body').height() * Math.random();
    height = normalizeNumber(height, $('body').height());
    var width = $('body').width() * Math.random();
    width = normalizeNumber(width, $('body').width());
    var dancer = new dancerMakerFunction(height, width, Math.random() * 1000);

    dancer.$node.attr('id', numberOfDancers + 'dancer');

    if (isOnDanceFloor(width, height)) {
      dancer.$node.css('background-image', 'url(\'img/butt-shake.gif\')');
    }

    $('body').append(dancer.$node);
    $('#' + numberOfDancers + 'dancer').draggable();
    numberOfDancers++;
    $('#droppable').droppable({
      drop: function(event, ui) {
        if (stringContains(ui.draggable.context.className, 'twerkingDancer')) {
          $(ui.draggable.context).css('background-image', 'url(\'img/butt-shake.gif\')');
        }
        if (stringContains(ui.draggable.context.className, 'bananaDancer')) {
          $(ui.draggable.context).css('background-image', 'url(\'img/banana-dancer.gif\')');
        }
      }
    });
  });

  setInterval(function() {
    console.log(`Currently ${numberOfDancers} dancer(s) on the dancefloor.`);
  }, 10000);

  $('.lineDancersButton').on('click', function(event) {

    for (var i = 0; i < numberOfDancers + 1; i++) {
      var $currentDancer = $('#' + i + 'dancer');
      if (i === 0) {
        $currentDancer.css('left', '50%');
      } else if (i % 2 !== 0) {
        $currentDancer.css('left', (50 - i - 1) + '%');
      } else if (i % 2 === 0) {
        $currentDancer.css('left', (50 + i) + '%');
      }
      $currentDancer.css('top', '50%');

      if ($currentDancer[0] === undefined) {
        return;
      }

      if (stringContains($currentDancer[0].className, 'twerkingDancer')) {
        $currentDancer.css('background-image', 'url(\'img/butt-shake.gif\')');
      }
      if (stringContains($currentDancer[0].className, 'bananaDancer')) {
        $currentDancer.css('background-image', 'url(\'img/banana-dancer.gif\')');
      }
    }
  });
});
