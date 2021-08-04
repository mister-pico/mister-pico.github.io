function squaresAnimation() {

  var animationObject = {


    targets: '.square, demo-wrapper',

    //keyframes: []

    borderRadius: [{
      value: '50%',
      delay: anime.stagger(80, {
        grid: [32, 18],
        from: 'center'
      })
    }, {
      value: '2%',
      delay: anime.stagger(0, {
        grid: [32, 18],
        from: 'center'
      })
    }],


    loop: true,
    easing: 'easeInOutQuad',
    //direction: 'alternate',
    duration: 2000,
  }

  return anime(animationObject);
};

function main() {
  squaresAnimation();
};