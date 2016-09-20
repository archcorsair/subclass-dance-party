$(document).ready(function() {
  window.dancers = [];
  var numberOfDancers = 0;
  $('#draggable').draggable();

  var randomTime = function() {
    return Math.floor(Math.random() * 10);
  };
  // Generate Dance Floor Tiles. 56 = number of tiles
  for (var i = 0; i < 56; i++) {
    var color = Math.floor(Math.random() * 16777215).toString(16);
    var $newTile = $('<div class="danceFloorTile"></div>');
    //$newTile.css('background-color', '#' + color);
    $newTile.css('animation', `danceFloorTileAnimation ${randomTime() + 1}s infinite`);
    $('#droppable').append($newTile);
  }

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    var currentDancer = numberOfDancers++;
    dancer.$node.attr('id', currentDancer + 'dancer');
    $('body').append(dancer.$node);
    $('#' + currentDancer + 'dancer').draggable();
    $('#droppable').droppable({
      drop: function(event, ui) {
        $(ui.draggable.context).css('background-image', 'url(\'img/banana-dancer.gif\')');
      }
    });
  });

  setInterval(function() {
    console.log(`Currently ${numberOfDancers} dancer(s) on the dancefloor.`);
  }, 10000);
});
