$(document).ready(function() {

  window.dancers = [];

  var randomTime = function() {
    return Math.floor(Math.random() * 10) + 2;
  };

  var stringContains = function(str, key) {
    str = str || '';
    return str.indexOf(key) > -1;
  };

  var getNormalizedNumber = function(limit) {
    var randomNumer = limit * Math.random();
    if (randomNumer > limit - 100) {
      randomNumer -= 100;
    }
    return randomNumer;
  }

  var generateDanceFloorTiles = function() {
    // Generate Dance Floor Tiles. 56 = number of tiles
    for (var i = 0; i < 56; i++) {
      var color = Math.floor(Math.random() * 16777215).toString(16);
      var $newTile = $('<div class="danceFloorTile"></div>');
      //$newTile.css('background-color', '#' + color);
      $newTile.css('animation', `danceFloorTileAnimation ${randomTime() + 1}s infinite`);
      $('#droppable').append($newTile);
    }
  };
  generateDanceFloorTiles();

  setInterval(function() {
    console.log(`Currently ${window.dancers.length} dancer(s) on the dancefloor.`);
  }, 10000);

  $('#draggable').draggable();

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      getNormalizedNumber($('body').height()),
      getNormalizedNumber($('body').width()),
      Math.random() * 1000
    );

    // To enable dragging
    dancer.$node.attr('id', window.dancers.length + 'dancer');

    // if (isOnDanceFloor(width, height)) {
    //   dancer.$node.css('background-image', 'url(\'img/butt-shake.gif\')');
    // }

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    // TODO
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

  $('.lineDancersButton').on('click', function(event) {
    var numberOfDancers = window.dancers.length;

    for (var i = 0; i < numberOfDancers; i++) {
      var $currentDancer = window.dancers[i];

      var dancefloorWith = $('body').width() / 2;
      var paddingLeft = dancefloorWith / 2;
      var spacePerDancer = dancefloorWith / numberOfDancers;
      var paddingInCell = (spacePerDancer / 2) - 50

      var currentPadding = paddingLeft + (spacePerDancer * i) + paddingInCell;
      $currentDancer.setPosition('50%', currentPadding + 'px');
      $currentDancer.startDance();
    }
  });

  $('.doAWaveButton').on('click', function(event) {
    var counter = 1;
    window.dancers.forEach(function(dancer) {
      setTimeout(function() {
        dancer.setSizeBig();

        setTimeout(function() {
          dancer.setSizeNormal();
        }, 1000);
      }, 100 + (counter++ * 100));
    });
  });

});
