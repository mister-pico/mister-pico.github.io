function main() {
  var columns = 32;
  var rows = 18;
  var elementClass = "square";
  var duration = 35000;
  var delay = duration / 50;

  createGrid(rows, columns, elementClass);
  squaresAnimation(duration, rows, columns);
}



function createGrid(rows, columns, elementClass) {

  var grid = "";

  for (var i = 0; i < (columns * rows); i++) {
    grid = grid + "<div class=\"" + elementClass + "\"></div>"
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
    //direction: 'alternate',
    duration: duration,
  }

  return anime(animationObject);
}