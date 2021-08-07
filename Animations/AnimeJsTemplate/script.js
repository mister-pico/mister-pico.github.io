function main() {
  var columns = 32;
  var rows = 18;
  var elementClass = "square";
  var duration = 60000;
  var delay = duration / 50;

  createGrid(rows, columns, elementClass);
  anime(squaresAnimation(duration, rows, columns, delay));
}



function createGrid(rows, columns, elementClass) {

  var grid = "";
  var row = 1;

  for (var i = 0; i < (columns * rows); i++) {

    var column = Math.ceil((i + 1) % columns);
    var gridElementAddress = "(" + column + "," + row + ")";


    grid = grid + "<div class=\"" + elementClass + "\"><div id=\"" + gridElementAddress + "\"></div></div>"



  }

  document.getElementById("animationElements").innerHTML = grid;
}



function squaresAnimation(duration, rows, columns, delay) {
  var animationObject = {

    targets: '.square, demo-wrapper',

    rotate: [{
      value: 120,
      delay: delay
    }, {
      value: 240,
      delay: delay
    }, {
      value: 360,
      delay: delay
    }],

    loop: true,
    //easing: 'linear',
    //it seems like the alternate feature does not carry the easin over.
    //direction: 'alternate',
    duration: duration,
  }

  //return anime(animationObject);
  return animationObject;
}