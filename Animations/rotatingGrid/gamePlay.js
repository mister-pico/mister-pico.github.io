function squaresAnimation() {
  var animationObject = {

    targets: '.square, demo-wrapper',



    keyframes: [{
        rotate: 360
      },
      {
        rotate: 0
      },
      {
        rotate: 540,
        duration: 3500
      },
      {
        rotate: -180
      }
    ],

    loop: true,
    easing: 'easeInOutSine',
    //direction: 'alternate',
    duration: 15000,
  }

  return anime(animationObject);
};

function rotate(axis, angle, delay, staggerDelay, columns, rows) {


  var rotation = "rotate" + axis;


  return {
    rotation: angle
  };
}


function main() {
  squaresAnimation();
};