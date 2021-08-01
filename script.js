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
      value: 0,
      delay: anime.stagger(50, {
        grid: [32, 18],
        from: 'center',
      }, {
        direction: 'reverse'
      }),

    }, {
      value: -30,
      delay: anime.stagger(50, {
        grid: [32, 18],
        from: 'center',
      }, {
        direction: 'reverse'
      })

    }, {
      value: 0,
      delay: anime.stagger(50, {
        grid: [32, 18],
        from: 'center',
      }, {
        direction: 'reverse'
      })

    }],



    loop: true,
    duration: 20000,
    endDelay: 3000
  }
  return anime(animationObject);
}