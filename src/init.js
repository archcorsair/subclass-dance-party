$(document).ready(function() {
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
    return str.indexOf(key) > -1;
  };

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    numberOfDancers++;

    dancer.$node.attr('id', numberOfDancers + 'dancer');
    $('body').append(dancer.$node);
    $('#' + numberOfDancers + 'dancer').draggable();

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
});
