function squaresAnimation() {
  var animationObject = {

    targets: '.square, demo-wrapper',



    translateX: [{
      value: 180,
      delay: anime.stagger(50, {
        grid: [32, 18],
      }),

    }],


    direction: 'alternate',
    loop: true,
    easing: 'linear',
    direction: 'alternate',
    duration: 3000,
  }

  return anime(animationObject);
};

function main() {
  squaresAnimation();
};