function squaresAnimation() {
  var animationObject = {

    targets: '.square, demo-wrapper',



    rotateZ: [{
      value: 180,
      delay: anime.stagger(50, {
        grid: [32, 18],
      }),

    }, {
      value: -270,
      delay: anime.stagger(50, {
        grid: [32, 18],
        from: 'center',
      }),

    }, {
      value: 360,
      delay: anime.stagger(50, {
        grid: [32, 18],
        from: 'center',
      }),
      direction: 'reverse',

    }, {
      value: 0,
      delay: anime.stagger(50, {
        grid: [32, 18],
      }),

    }],


    direction: 'alternate',
    loop: true,
    easing: 'linear',
    //direction: 'alternate',
    duration: 13000,
  }
  return anime(animationObject);
}