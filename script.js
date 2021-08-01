function squaresAnimation() {
  var animationObject = {

    targets: '.square, demo-wrapper',



    rotateZ: [{
      value: 30,
      delay: anime.stagger(50, {
        grid: [32, 18],
        from: 'center',
      }, {
        direction: 'reverse'
      }),

    }, {
      value: 60,
      delay: anime.stagger(50, {
        grid: [32, 18],
        from: 'center',
      }, {
        direction: 'reverse'
      }),

    }, {
      value: 90,
      delay: anime.stagger(50, {
        grid: [32, 18],
        from: 'center',
      }, {
        direction: 'reverse'
      }),

    }],


    loop: true,
    easing: 'linear',
    //direction: 'alternate',
    duration: 6000,
  }
  return anime(animationObject);
}