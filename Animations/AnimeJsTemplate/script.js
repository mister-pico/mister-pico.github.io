function main() {
  var columns = 32;
  var rows = 18;
  var elementClass = "square";
  var duration = 150000;
  var delay = 0;
  var autoplay = true
  var easing = ""

  //createGrid(rows, columns, elementClass);

  var animatedGrid = new Grid(rows, columns, "div", "square", "test", "");
  document.getElementById("animationElements").innerHTML = animatedGrid.getGridHtml();

  anime(squaresAnimation(duration, rows, columns, delay));


  //var animation = new Animation(easing, duration, autoplay);
  //animation.add
}




function Grid(rows, columns, tagName, className, id, innerHtml) {
  this.numberOfItems = rows * columns;
  this.rows = rows;
  this.columns = columns;
  this.tagName = tagName;
  this.className = className;
  this.id = id;
  this.innerHtml = innerHtml;

  this.getAddress = function getAddress(itemNumber) {
    return "[ADDRESS PLACEHOLDER]";
  }

  this.createGridElement = function createGridElement() {
    return "<" + this.tagName + " class=\"" + this.className + "\" id=\"" + this.id + "\">" + this.innerHtml + "</" + this.tagName + ">";
  }

  this.getGridHtml = function getGridHtml() {

    var grid = ""

    for (var i = 0; i < (this.numberOfItems); i++) {
      grid = grid + this.createGridElement();
    }

    return grid;
  }
}

function Animation(easing, duration, autoplay) {
  this.easing = easing;
  this.duration = duration;

  //returns an object that sets the easing and duration for an anime.js timeline
  this.getTimelineObject = function timeLineObject() {
    return {
      easing: this.easing,
      duration: this.duration,
      autoplay: this.autoplay
    };
  }

  //returns an object that can be passed to the anime.js timeline
  this.getTimelineChildObject = function timelineChild(targets, animationType, value, easing) {

    switch (animationType) {
      case "rotate":
        return {
          targets: this.targets,
            rotate: value,
            easing: easing
        }
        break;

      case "scale":
        return {
          targets: this.targets,
            scale: value,
            easing: easing
        }
        break;

      case "translateX":
        return {
          targets: this.targets,
            translateX: value,
            easing: easing
        }
        break;

      case "translateY":
        return {
          targets: this.targets,
            translateY: value
        }
        break;
    }



  }

}






function squaresAnimation(duration, rows, columns, delay) {
  var animationObject = {

    targets: '.square, demo-wrapper',

    rotate: [{
      value: anime.stagger([90, 360], {
        direction: 'first'
      }),
      delay: delay
    }, {
      value: anime.stagger([450, 600], {
        direction: 'last'
      }),
      delay: delay
    }, {
      value: 0,
      delay: delay,
      //easing: 'linear'
    }],


    scale: [{
      value: 1.1,
      delay: delay
    }, {
      value: 1.5,
      delay: delay
    }, {
      value: 1,
      delay: delay
    }],


    borderRadius: [{
      value: 25,
      delay: delay
    }, {
      value: 10,
      delay: delay
    }, {
      value: 15,
      delay: delay
    }],

    //autoplay: false,
    loop: true,
    //easing: 'linear',
    //it seems like the alternate feature does not carry the easin over.
    //direction: 'alternate',
    duration: duration,
  }

  //return anime(animationObject);
  return animationObject;
}